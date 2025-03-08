import React from 'react';

const About = () => {
  const features = [
    {
      title: "AI-Powered Diagnosis",
      description: "Analyzes symptoms and medical records to provide data-driven insights for understanding potential health conditions."
    },
    {
      title: "Support Groups",
      description: "A safe space for individuals with similar health challenges to connect, share experiences, and offer emotional support."
    },
    {
      title: "Access to Medical Records",
      description: "Full access to medical history, empowering patients to make informed decisions, seek second opinions, and receive personalized care."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Barlow']">
      <h1 className="text-6xl font-bold mb-16">About Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-blue-50 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition duration-300">
          <h2 className="text-4xl font-bold mb-6">We are <span className='text-[#4CC0BF]'>Jeevanya</span></h2>
          <p className="text-lg leading-relaxed">
            A patient-focused digital healthcare platform that connects with hospital 
            systems to provide real-time access to medical records, personalized treatment 
            plans, proactive health alerts, and seamless communication between patients, 
            doctors, and caregivers. This platform enhances patient engagement and improves the 
            overall healthcare experience.
          </p>
        </div>
        

        <div className="bg-blue-50 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition duration-300">
          <ul className="space-y-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-[#4CC0BF] rounded-full mr-4"></div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-800">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition duration-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-[#4CC0BF] text-4xl font-bold mb-2">10,000+</div>
            <p className="text-lg">Patients Served</p>
          </div>
          <div className="text-center">
            <div className="text-[#4CC0BF] text-4xl font-bold mb-2">500+</div>
            <p className="text-lg">Healthcare Providers</p>
          </div>
          <div className="text-center">
            <div className="text-[#4CC0BF] text-4xl font-bold mb-2">24/7</div>
            <p className="text-lg">Support Available</p>
          </div>
        </div>
      </div>


      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#4CC0BF]">Our Mission</h2>
        <p className="text-xl">
          To revolutionize healthcare accessibility and empower patients with the information and 
          tools they need to take control of their health journey.
        </p>
      </div>
    </div>
  );
};

export default About;