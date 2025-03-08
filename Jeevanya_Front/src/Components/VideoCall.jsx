import { CallingState, StreamCall, StreamVideo, StreamVideoClient, useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { ParticipantView } from '@stream-io/video-react-sdk';

const apiKey = 'mmhfdzb5evj2';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0RhcnRoX05paGlsdXMiLCJ1c2VyX2lkIjoiRGFydGhfTmloaWx1cyIsInZhbGlkaXR5X2luX3NlY29uZHMiOjYwNDgwMCwiaWF0IjoxNzQxNDAzNzcyLCJleHAiOjE3NDIwMDg1NzJ9.iLJupJXeYD-bU1NdGGeib4qZ_0XyWXqTJiBxurUo5As';
const userId = 'Darth_Nihilus';
const callId = '3NtKfkrBkSHa';

// set up the user object
const user = {
  id: userId,
  name: 'Oliver',
  image: 'https://getstream.io/random_svg/?id=oliver&name=Oliver',
};


export function VideoCall() {
  
  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);
  call.join({ create: true });

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUI />
      </StreamCall>
    </StreamVideo>
  );
}

export const MyUI = () => {
  const call = useCall();
  const { useCallCallingState, useParticipants, useLocalParticipant } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participants = useParticipants();
  const localParticipant = useLocalParticipant();

  if (callingState !== CallingState.JOINED) {
    return <div>Loading...</div>;
  }

  const toggleAudio = async () => {
    if (localParticipant) {
      await call?.microphone.toggle();
    }
  };

  const toggleVideo = async () => {
    if (localParticipant) {
      await call?.camera.toggle();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-900 text-white">
      <h2 className="text-2xl font-semibold mb-4">Video Call: {call.id}</h2>
      <p className="mb-2">Participants: {participants.length}</p>
      <div className="w-full max-w-4xl h-96 bg-black rounded-lg overflow-hidden grid grid-cols-2 gap-4 p-4">
        {participants.map((participant) => (
          <ParticipantView
            key={participant.sessionId}
            participant={participant}
            className="w-full h-full"
          />
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={toggleAudio}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {localParticipant?.audioStream ? 'Mute' : 'Unmute'}
        </button>
        <button
          onClick={toggleVideo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {localParticipant?.videoStream ? 'Turn Video Off' : 'Turn Video On'}
        </button>
      </div>
    </div>
  );
};