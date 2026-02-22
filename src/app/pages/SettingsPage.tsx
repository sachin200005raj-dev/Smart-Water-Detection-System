import { useState } from "react";
import { Link } from "react-router";
import { Droplet, Home, User, Bell, Settings as SettingsIcon, RotateCcw } from "lucide-react";

export function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    location: "Room 101",
  });

  const [alertLimits, setAlertLimits] = useState({
    highUsage: 100, // liters
    lowLevel: 20, // percentage
    leakThreshold: 5, // liters per minute
  });

  const [sensorCalibration, setSensorCalibration] = useState({
    flowSensor: 100,
    levelSensor: 100,
    pressureSensor: 100,
  });

  const handleProfileChange = (field: string, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleAlertLimitChange = (field: string, value: number) => {
    setAlertLimits({ ...alertLimits, [field]: value });
  };

  const handleSensorCalibrationChange = (field: string, value: number) => {
    setSensorCalibration({ ...sensorCalibration, [field]: value });
  };

  const handleSaveSettings = () => {
    alert("Settings saved successfully!");
  };

  const handleResetSystem = () => {
    if (confirm("Are you sure you want to reset the system? This will clear all data and alerts.")) {
      alert("System reset successfully!");
    }
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
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Configure your water monitoring system</p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold">Profile</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleProfileChange("name", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleProfileChange("email", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location / Room No
                </label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => handleProfileChange("location", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Alert Limit Settings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold">Alert Limit Settings</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Configure threshold values for system alerts
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  High Usage Limit (Liters per day)
                </label>
                <input
                  type="number"
                  value={alertLimits.highUsage}
                  onChange={(e) => handleAlertLimitChange("highUsage", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Low Water Level Alert (%)
                </label>
                <input
                  type="number"
                  value={alertLimits.lowLevel}
                  onChange={(e) => handleAlertLimitChange("lowLevel", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leak Detection Threshold (Liters per minute)
                </label>
                <input
                  type="number"
                  value={alertLimits.leakThreshold}
                  onChange={(e) => handleAlertLimitChange("leakThreshold", parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Sensor Calibration */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <SettingsIcon className="text-blue-600" size={24} />
              <h2 className="text-xl font-semibold">Sensor Calibration</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Adjust sensor calibration values (100 = default)
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Flow Sensor
                  </label>
                  <span className="text-sm font-medium text-blue-600">
                    {sensorCalibration.flowSensor}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={sensorCalibration.flowSensor}
                  onChange={(e) => handleSensorCalibrationChange("flowSensor", parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Level Sensor
                  </label>
                  <span className="text-sm font-medium text-blue-600">
                    {sensorCalibration.levelSensor}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={sensorCalibration.levelSensor}
                  onChange={(e) => handleSensorCalibrationChange("levelSensor", parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Pressure Sensor
                  </label>
                  <span className="text-sm font-medium text-blue-600">
                    {sensorCalibration.pressureSensor}%
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="150"
                  value={sensorCalibration.pressureSensor}
                  onChange={(e) => handleSensorCalibrationChange("pressureSensor", parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* System Reset */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 mb-4">
              <RotateCcw className="text-red-600" size={24} />
              <h2 className="text-xl font-semibold">System Reset</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Reset the system to default settings. This will clear all data and alerts.
            </p>
            <button
              onClick={handleResetSystem}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Reset System
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handleSaveSettings}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Settings
            </button>
            <Link
              to="/dashboard"
              className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium inline-block"
            >
              Cancel
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
