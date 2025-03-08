import React from 'react';

const CommunityDiscussions = () => {
  const discussions = [
    {
      id: 1,
      author: 'Sunil Pandey',
      title: 'How to Manage Chemotherapy Side Effects?',
      content: 'Chemotherapy is a tough journey, but there are ways to manage the side effects. I\'ve been struggling with fatigue, nausea, and hair loss. Has anyone found any helpful strategies or tips for making the process a bit easier? I\'d love to hear how others are coping with these side effects.',
      date: 'March 5, 2025'
    },
    {
      id: 2,
      author: 'Sarah Lee',
      title: 'Nutrition Tips During Cancer Treatment',
      content: 'Cancer doesn\'t just affect the body; it takes a toll on your mental and emotional health. Lately, I\'ve been feeling anxious and overwhelmed. How do you stay positive? Any advice on managing anxiety or dealing with feelings of isolation?',
      date: 'March 2, 2025'
    },
    {
      id: 3,
      author: 'James Rodriguez',
      title: 'Exercise Recommendations Post-Surgery',
      content: 'It\'s been 6 weeks since my mastectomy and my doctor has cleared me for light exercise. I used to be very active before diagnosis, but now I\'m not sure where to start. What kinds of exercise have worked for you during recovery? Any specific routines or precautions I should be aware of?',
      date: 'March 7, 2025'
    },
    {
      id: 4,
      author: 'Michelle Chen',
      title: 'Financial Resources for Cancer Patients',
      content: 'The medical bills are starting to pile up, and I\'m finding it difficult to navigate the insurance system. Are there any financial assistance programs or resources that have helped you? I\'m particularly looking for help with prescription costs and transportation to treatments.',
      date: 'March 4, 2025'
    },
    {
      id: 5,
      author: 'Robert Johnson',
      title: 'Talking to Children About Cancer',
      content: 'I\'ve recently been diagnosed and I\'m struggling with how to explain my condition to my young children (ages 5 and 8). I want to be honest without scaring them. Has anyone had success with specific approaches or resources that helped their kids understand and cope?',
      date: 'March 3, 2025'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Dark and visible grid overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 bg-blue-50 bg-opacity-90 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Community and Discussions</h1>
          
          {discussions.map(discussion => (
            <div key={discussion.id} className="bg-white rounded-lg shadow-sm mb-6 p-8 border border-gray-100">
              <div className="text-blue-600 font-medium mb-3">
                by {discussion.author}
              </div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {discussion.title}
              </h2>
              
              <p className="text-gray-700 mb-5 leading-relaxed">
                {discussion.content}
              </p>
              
              <div className="text-red-500 font-medium">
                Date: {discussion.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityDiscussions;