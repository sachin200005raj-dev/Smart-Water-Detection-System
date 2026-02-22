import { useState } from "react";
import { Link } from "react-router";
import {
  Droplet,
  Activity,
  AlertTriangle,
  Bell,
  Power,
  Settings,
  Home,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// Mock data for the chart
const usageData = [
  { day: "Mon", usage: 45 },
  { day: "Tue", usage: 52 },
  { day: "Wed", usage: 38 },
  { day: "Thu", usage: 65 },
  { day: "Fri", usage: 48 },
  { day: "Sat", usage: 70 },
  { day: "Sun", usage: 55 },
];

export function DashboardPage() {
  const [systemRunning, setSystemRunning] = useState(true);
  const waterLevel = 75; // percentage
  const flowStatus = "ON";
  const usageToday = 48; // liters
  const leakStatus = "Normal";

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
              <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link to="/alerts" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <Bell size={20} />
                <span>Alerts</span>
              </Link>
              <Link to="/settings" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your water system in real-time</p>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Water Level Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-medium">Water Level</h3>
              <Droplet className="text-blue-600" size={24} />
            </div>
            <div className="mb-3">
              <div className="text-3xl font-bold text-gray-900">{waterLevel}%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all"
                style={{ width: `${waterLevel}%` }}
              ></div>
            </div>
          </div>

          {/* Flow Status Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-medium">Flow Status</h3>
              <Activity className="text-green-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-3">{flowStatus}</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Active</span>
            </div>
          </div>

          {/* Usage Today Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-medium">Usage Today</h3>
              <Activity className="text-blue-600" size={24} />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-3">{usageToday}L</div>
            <p className="text-sm text-gray-600">Liters consumed</p>
          </div>

          {/* Leak Status Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600 font-medium">Leak Status</h3>
              <AlertTriangle className="text-green-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-3">{leakStatus}</div>
            <Link
              to="/leakage-detection"
              className="text-sm text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        </div>

        {/* Charts and Quick Actions Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Usage Chart */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Daily Water Usage</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Alerts Box */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Recent Alerts</h3>
              <Bell className="text-gray-600" size={20} />
            </div>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 pl-3 py-2">
                <p className="text-sm font-medium">High Usage Warning</p>
                <p className="text-xs text-gray-500">Today, 2:30 PM</p>
              </div>
              <div className="border-l-4 border-green-500 pl-3 py-2">
                <p className="text-sm font-medium">System Normal</p>
                <p className="text-xs text-gray-500">Today, 12:00 PM</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-3 py-2">
                <p className="text-sm font-medium">Tank Refilled</p>
                <p className="text-xs text-gray-500">Yesterday, 6:00 AM</p>
              </div>
            </div>
            <Link
              to="/alerts"
              className="text-sm text-blue-600 hover:underline block mt-4"
            >
              View All Alerts →
            </Link>
          </div>
        </div>

        {/* System Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Control Panel */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">System Controls</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">System Status</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    systemRunning
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {systemRunning ? "Running" : "Stopped"}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSystemRunning(true)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Power size={18} />
                  Start System
                </button>
                <button
                  onClick={() => setSystemRunning(false)}
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Power size={18} />
                  Stop System
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Quick Access</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/water-tank"
                className="border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 text-center transition-colors"
              >
                <Droplet className="mx-auto mb-2 text-blue-600" size={24} />
                <span className="text-sm font-medium">Water Tank</span>
              </Link>
              <Link
                to="/leakage-detection"
                className="border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 text-center transition-colors"
              >
                <AlertTriangle className="mx-auto mb-2 text-blue-600" size={24} />
                <span className="text-sm font-medium">Leak Detection</span>
              </Link>
              <Link
                to="/alerts"
                className="border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 text-center transition-colors"
              >
                <Bell className="mx-auto mb-2 text-blue-600" size={24} />
                <span className="text-sm font-medium">All Alerts</span>
              </Link>
              <Link
                to="/settings"
                className="border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 text-center transition-colors"
              >
                <Settings className="mx-auto mb-2 text-blue-600" size={24} />
                <span className="text-sm font-medium">Settings</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
