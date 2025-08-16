import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiHome, FiBook, FiUsers, 
  FiDollarSign, FiPieChart, 
  FiSettings 
} from "react-icons/fi";

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/admin", icon: <FiHome />, label: "Dashboard" },
    { path: "/admin/courses", icon: <FiBook />, label: "Courses" },
    { path: "/admin/users", icon: <FiUsers />, label: "Users" },
    { path: "/admin/enrollments", icon: <FiDollarSign />, label: "Enrollments" },
    { path: "/admin/analytics", icon: <FiPieChart />, label: "Analytics" },
    { path: "/admin/settings", icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 h-full bg-indigo-700 text-white">
        <div className="flex items-center justify-center h-16 px-4 border-b border-indigo-800">
          <span className="text-xl font-bold">Let's Code Brain</span>
        </div>
        <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 mt-2 rounded-lg ${
                location.pathname === item.path
                  ? "bg-indigo-800 text-white"
                  : "text-indigo-200 hover:bg-indigo-600 hover:text-white"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
