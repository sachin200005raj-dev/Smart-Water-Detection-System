import { useState } from "react";
import { Link } from "react-router";
import { Droplet, AlertTriangle, Home, CheckCircle } from "lucide-react";

export function LeakageDetectionPage() {
  const [leakDetected, setLeakDetected] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleResetAlert = () => {
    setLeakDetected(false);
    setShowAlert(false);
  };

  const simulateLeak = () => {
    setLeakDetected(true);
    setShowAlert(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Droplet className="text-blue-600" size={28} />
              <span className="font-semibold text-lg">Smart Water Detection</span>
            </div>
            <div className="flex gap-4">
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <Home size={20} />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Leakage Detection</h1>
          <p className="text-gray-600 mt-1">Monitor and detect water leaks in your system</p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              {leakDetected ? (
                <div className="bg-red-100 p-4 rounded-full">
                  <AlertTriangle className="text-red-600" size={48} />
                </div>
              ) : (
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="text-green-600" size={48} />
                </div>
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">
              Leak Status: {leakDetected ? "LEAK DETECTED" : "NORMAL"}
            </h2>
            <p className={`text-lg ${leakDetected ? "text-red-600" : "text-green-600"}`}>
              {leakDetected
                ? "A water leak has been detected in the system"
                : "No leaks detected. System is operating normally"}
            </p>
          </div>

          {/* Pipe Flow Diagram */}
          <div className="bg-gray-50 rounded-lg p-8 mb-6">
            <h3 className="font-semibold text-lg mb-4 text-center">Pipe Flow Diagram</h3>
            <div className="flex items-center justify-center gap-4">
              {/* Tank */}
              <div className="text-center">
                <div className="bg-blue-600 rounded-lg p-4 w-20 h-24 flex items-center justify-center">
                  <Droplet className="text-white" size={32} />
                </div>
                <p className="text-sm mt-2">Tank</p>
              </div>

              {/* Pipe 1 */}
              <div className="relative">
                <div className="bg-gray-400 w-24 h-4 rounded"></div>
                {leakDetected && (
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <div className="text-blue-400 animate-bounce">💧</div>
                      <div className="text-blue-400 animate-bounce delay-100">💧</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Junction */}
              <div className="bg-gray-600 w-8 h-8 rounded-full"></div>

              {/* Pipe 2 */}
              <div className="bg-gray-400 w-24 h-4 rounded"></div>

              {/* Output */}
              <div className="text-center">
                <div className="bg-green-600 rounded-lg p-4 w-20 h-24 flex items-center justify-center">
                  <Droplet className="text-white" size={32} />
                </div>
                <p className="text-sm mt-2">Output</p>
              </div>
            </div>
          </div>

          {/* Alert Message Box */}
          {showAlert && (
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-red-900 mb-2">⚠️ Water Leak Detected!</h3>
                  <p className="text-red-800 mb-2">
                    A leak has been detected in the pipe between the tank and junction.
                    Please check the system immediately to prevent water waste.
                  </p>
                  <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                    <li>Location: Main pipe section</li>
                    <li>Detected at: {new Date().toLocaleTimeString()}</li>
                    <li>Severity: Medium</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleResetAlert}
              disabled={!leakDetected}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                leakDetected
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Reset Alert
            </button>
            <button
              onClick={simulateLeak}
              disabled={leakDetected}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !leakDetected
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Simulate Leak (Demo)
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">Detection Method</h3>
            <p className="text-sm text-gray-600">
              Uses flow sensors and pressure monitoring to detect abnormal water flow patterns
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-gray-600">
              System detects leaks within 30 seconds of occurrence
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">Alert System</h3>
            <p className="text-sm text-gray-600">
              Automatic notifications sent to registered users via dashboard
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
