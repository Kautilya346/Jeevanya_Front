import { useEffect, useState } from "react";
import {
  CallingState,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
  ParticipantView,
} from "@stream-io/video-react-sdk";
import { useNavigate } from "react-router-dom";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0RhcnRoX05paGlsdXMiLCJ1c2VyX2lkIjoiRGFydGhfTmloaWx1cyIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQxNDAzNzcyLCJleHAiOjE3NDIwMDg1NzJ9.iLJupJXeYD-bU1NdGGeib4qZ_0XyWXqTJiBxurUo5As";
const userId = "Darth_Nihilus";
const callId = "3NtKfkrBkSHa";

const user = {
  id: userId,
  name: "James",
  image: "",
};

export function VideoCall() {
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null);

  useEffect(() => {
    const newClient = new StreamVideoClient({ apiKey, user, token });
    const newCall = newClient.call("default", callId);

    newCall
      .join({ create: true })
      .then(() => {
        setClient(newClient);
        setCall(newCall);
      })
      .catch((err) => {
        console.error("Failed to join the call", err);
      });

    return () => {
      if (newCall) {
        newCall.leave().catch((err) => {
          console.error("Failed to leave the call", err);
        });
      }
      if (newClient) {
        newClient.disconnectUser();
      }
    };
  }, []);

  if (!client || !call) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-[#C7E9FF]">
        <div className="text-black font-medium">Connecting to call...</div>
      </div>
    );
  }

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUI />
      </StreamCall>
    </StreamVideo>
  );
}

export const MyUI = () => {
  const navigate = useNavigate();
  const call = useCall();
  const { useCallCallingState, useParticipants, useLocalParticipant } =
    useCallStateHooks();
  const callingState = useCallCallingState();
  const participants = useParticipants();
  const localParticipant = useLocalParticipant();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-[#C7E9FF]">
        <div className="text-black font-medium">Joining call...</div>
      </div>
    );
  }

  const toggleAudio = async () => {
    if (localParticipant) {
      await call?.microphone.toggle();
      setIsMuted(!isMuted);
    }
  };

  const toggleVideo = async () => {
    if (localParticipant) {
      await call?.camera.toggle();
      setIsVideoOff(!isVideoOff);
    }
  };

  const endCall = async () => {
    if (call) {
      await call.leave(); 
      await new Promise((resolve) => setTimeout(resolve, 4000)); 

      navigate("/"); 

      setTimeout(() => {
        window.close();
      }, 500); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen bg-[#C7E9FF] text-black">
      <div className="w-full p-4 flex justify-between items-center bg-white shadow-md">
        <h2 className="text-xl font-medium">
          Meeting Room: {call.id.slice(-4)}
        </h2>
        <div className="text-sm font-medium bg-[#C7E9FF] px-3 py-1 rounded-full">
          {participants.length} Participant
          {participants.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="flex space-x-6 pt-20 ">
        <button
          onClick={toggleAudio}
          className={`px-4 py-2 rounded-md flex items-center justify-center font-medium ${
            isMuted ? "bg-red-100 text-red-600" : "bg-[#89ffce] text-black"
          } hover:opacity-90 transition-all`}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>

        <button
          onClick={toggleVideo}
          className={`px-4 py-2 rounded-md flex items-center justify-center font-medium ${
            isVideoOff ? "bg-red-100 text-red-600" : "bg-[#19a3ff] text-black"
          } hover:opacity-90 transition-all`}
        >
          {isVideoOff ? "Start Video" : "Stop Video"}
        </button>

        <button
          onClick={() => {
            navigate("/");
          }}
          className="px-4 py-2 rounded-md bg-red-600 text-white flex items-center justify-center font-medium hover:bg-red-700 transition-all"
        >
          End Call
        </button>
      </div>
      <div className="flex-1 w-full p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-h-full">
          {participants.map((participant) => (
            <div
              key={participant.sessionId}
              className="relative bg-black rounded-lg overflow-hidden shadow-lg"
              style={{
                height: "300px",
                width: "100%",
              }}
            >
              <ParticipantView
                participant={participant}
                className="w-full h-full"
                fit="cover"
                trackType="videoTrack"
                autoFit={true}
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white px-3 py-1 m-2 rounded-full text-sm">
                {participant.name || participant.userId}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-white p-4 shadow-md flex justify-center"></div>
    </div>
  );
};
