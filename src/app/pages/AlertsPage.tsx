import { Link } from "react-router";
import { Droplet, Home, AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "danger",
    title: "Leak Alert",
    message: "Water leak detected in main pipe section",
    time: "Today, 3:45 PM",
    status: "Active",
  },
  {
    id: 2,
    type: "warning",
    title: "Overflow Alert",
    message: "Water tank level above 90% - risk of overflow",
    time: "Today, 2:30 PM",
    status: "Active",
  },
  {
    id: 3,
    type: "warning",
    title: "High Usage Alert",
    message: "Water consumption exceeded daily average by 25%",
    time: "Today, 1:15 PM",
    status: "Acknowledged",
  },
  {
    id: 4,
    type: "normal",
    title: "System Normal",
    message: "All systems operating within normal parameters",
    time: "Today, 12:00 PM",
    status: "Resolved",
  },
  {
    id: 5,
    type: "normal",
    title: "Tank Refilled",
    message: "Water tank successfully refilled to 95%",
    time: "Yesterday, 6:00 AM",
    status: "Resolved",
  },
  {
    id: 6,
    type: "warning",
    title: "Low Pressure Warning",
    message: "Water pressure below normal threshold",
    time: "Yesterday, 4:20 PM",
    status: "Resolved",
  },
];

export function AlertsPage() {
  const getAlertColor = (type: string) => {
    switch (type) {
      case "danger":
        return {
          bg: "bg-red-50",
          border: "border-red-300",
          icon: "text-red-600",
          text: "text-red-900",
        };
      case "warning":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-300",
          icon: "text-yellow-600",
          text: "text-yellow-900",
        };
      case "normal":
        return {
          bg: "bg-green-50",
          border: "border-green-300",
          icon: "text-green-600",
          text: "text-green-900",
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-300",
          icon: "text-gray-600",
          text: "text-gray-900",
        };
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-red-100 text-red-700";
      case "Acknowledged":
        return "bg-yellow-100 text-yellow-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "danger":
        return <AlertCircle size={24} />;
      case "warning":
        return <AlertTriangle size={24} />;
      case "normal":
        return <CheckCircle size={24} />;
      default:
        return <AlertCircle size={24} />;
    }
  };

  const activeAlerts = alerts.filter(a => a.status === "Active").length;
  const warningAlerts = alerts.filter(a => a.type === "warning" || a.type === "danger").length;

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
          <h1 className="text-3xl font-bold text-gray-900">System Alerts</h1>
          <p className="text-gray-600 mt-1">Monitor all system alerts and notifications</p>
        </div>

        {/* Alert Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Alerts</p>
                <p className="text-3xl font-bold text-gray-900">{alerts.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <AlertCircle className="text-blue-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Alerts</p>
                <p className="text-3xl font-bold text-red-600">{activeAlerts}</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="text-red-600" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Warnings</p>
                <p className="text-3xl font-bold text-yellow-600">{warningAlerts}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <AlertTriangle className="text-yellow-600" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Alert Legend */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="font-semibold mb-4">Alert Status Colors</h3>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-sm text-gray-700">Green = Normal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-sm text-gray-700">Yellow = Warning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-sm text-gray-700">Red = Danger</span>
            </div>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => {
            const colors = getAlertColor(alert.type);
            return (
              <div
                key={alert.id}
                className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6 transition-all hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div className={colors.icon}>
                    {getAlertIcon(alert.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`font-semibold text-lg ${colors.text}`}>
                        {alert.title}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          alert.status
                        )}`}
                      >
                        {alert.status}
                      </span>
                    </div>
                    <p className={`mb-2 ${colors.text}`}>{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Acknowledge All
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Clear Resolved
            </button>
            <Link
              to="/settings"
              className="bg-white text-gray-700 border-2 border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors inline-block"
            >
              Alert Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
