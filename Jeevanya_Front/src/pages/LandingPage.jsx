export default function LandingPage() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">JEEVANJA</h1>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">About us</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Contact us</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="bg-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Empowering Lives Through Health
            </h1>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
              Get an appointment
            </button>
          </div>
        </div>
  
        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Connect Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-600">Connect with healthcare professionals and patients community.</p>
            </div>
  
            {/* Profile Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Profile</h3>
              <p className="text-gray-600">Manage your health profile and medical records securely.</p>
            </div>
  
            {/* Diagnosis Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Diagnosis</h3>
              <p className="text-gray-600">Get preliminary diagnosis and health recommendations.</p>
            </div>
  
            {/* Forum Card */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Forum</h3>
              <p className="text-gray-600">Participate in health discussions and Q&A sessions.</p>
            </div>
  
            {/* Additional Service Cards can be added here */}
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>© 2024 JEEVANJA. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }