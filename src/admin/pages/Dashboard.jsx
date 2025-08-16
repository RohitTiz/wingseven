import React from "react";
import StatsCard from "../components/StatsCard";
import RecentEnrollments from "../components/RecentEnrollments";

const Dashboard = () => {
  const stats = [
    { title: "Total Courses", value: "24", change: "+5%", trend: "up" },
    { title: "Active Users", value: "1,234", change: "+12%", trend: "up" },
    { title: "Revenue", value: "$15,200", change: "+8%", trend: "up" },
    { title: "Completion Rate", value: "78%", change: "+3%", trend: "up" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Enrollments */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Enrollments</h2>
        <RecentEnrollments />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="font-medium mb-3">Quick Actions</h3>
          <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 mb-2">
            Add New Course
          </button>
          <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            Send Announcement
          </button>
        </div>
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h3 className="font-medium mb-3">Platform Analytics</h3>
          <div className="h-48 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;