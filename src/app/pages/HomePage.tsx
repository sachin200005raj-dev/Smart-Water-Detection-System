import { Link } from "react-router";
import { Droplet, Activity, AlertTriangle, Bell } from "lucide-react";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Droplet className="text-blue-600" size={32} />
            <span className="font-semibold text-xl">Smart Water Detection</span>
          </div>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Smart Water Detection System
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A simple system to monitor water level, usage, and leakage
          </p>
          <p className="text-lg text-gray-700 italic mb-8">
            "Monitor water. Detect leaks. Save water."
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-900">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Water Level Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring of water levels in your tank
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Activity className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Water Usage Tracking</h3>
              <p className="text-gray-600">
                Track daily and weekly water consumption patterns
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Leak Detection</h3>
              <p className="text-gray-600">
                Automatic detection of water leaks in the system
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Bell className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Alert System</h3>
              <p className="text-gray-600">
                Instant alerts for critical water-related issues
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            This project UI is designed as a simple and easy-to-use interface for
            monitoring water level, usage, and leakage. It helps users understand
            water conditions clearly and supports basic automation and alert systems.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Smart Water Detection System</p>
          <p className="text-gray-400">College Mini Project</p>
        </div>
      </footer>
    </div>
  );
}
