import { useState } from "react";
import { Link } from "react-router";
import { Droplet, Home, Power, AlertTriangle } from "lucide-react";

export function WaterTankPage() {
  const [pumpOn, setPumpOn] = useState(true);
  const waterLevel = 75; // percentage
  const capacity = 1000; // liters
  const currentWater = (waterLevel / 100) * capacity;
  const overflowStatus = waterLevel > 90 ? "Warning" : "Normal";

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
          <h1 className="text-3xl font-bold text-gray-900">Water Tank Monitor</h1>
          <p className="text-gray-600 mt-1">Monitor water tank level and control pump system</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tank Visualization */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-semibold text-lg mb-6 text-center">Tank Status</h3>
            
            {/* Tank Image/Visual */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-64 border-4 border-gray-700 rounded-lg bg-gray-100 overflow-hidden">
                {/* Water fill */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-500"
                  style={{ height: `${waterLevel}%` }}
                >
                  <div className="absolute inset-0 bg-blue-400 opacity-30 animate-pulse"></div>
                </div>
                
                {/* Level markers */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between py-2 px-1">
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>100%</span>
                    <span>{capacity}L</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>75%</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between text-xs font-bold text-gray-600">
                    <span>0%</span>
                    <span>0L</span>
                  </div>
                </div>
                
                {/* Current level indicator */}
                <div 
                  className="absolute left-0 right-0 border-t-2 border-red-500"
                  style={{ bottom: `${waterLevel}%` }}
                >
                  <span className="absolute -right-12 -top-3 bg-red-500 text-white px-2 py-1 rounded text-xs">
                    {waterLevel}%
                  </span>
                </div>
              </div>
            </div>

            {/* Tank Stats */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Current Water</span>
                <span className="font-semibold">{currentWater}L</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Tank Capacity</span>
                <span className="font-semibold">{capacity}L</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-gray-600">Water Level</span>
                <span className="font-semibold">{waterLevel}%</span>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Pump Control */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Pump Control</h3>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Pump Status</span>
                  <span className={`px-4 py-2 rounded-full font-medium ${
                    pumpOn ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                  }`}>
                    {pumpOn ? "ON" : "OFF"}
                  </span>
                </div>
                
                {pumpOn && (
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Pump is running</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPumpOn(true)}
                  disabled={pumpOn}
                  className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    pumpOn
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  <Power size={18} />
                  Turn ON
                </button>
                <button
                  onClick={() => setPumpOn(false)}
                  disabled={!pumpOn}
                  className={`py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    !pumpOn
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  <Power size={18} />
                  Turn OFF
                </button>
              </div>
            </div>

            {/* Overflow Status */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-4">Overflow Status</h3>
              
              <div className="flex items-start gap-3">
                {overflowStatus === "Warning" ? (
                  <>
                    <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-medium text-yellow-900">Warning: Near Overflow</p>
                      <p className="text-sm text-yellow-700 mt-1">
                        Water level is above 90%. Please monitor the tank closely.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                      <Droplet className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-green-900">Normal</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Water level is within normal range. No overflow risk detected.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Tank Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Tank Information</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Automatic pump control based on water level</li>
                <li>• Overflow prevention system active</li>
                <li>• Real-time level monitoring</li>
                <li>• Manual override available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
