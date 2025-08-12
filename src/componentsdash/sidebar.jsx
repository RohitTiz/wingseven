import React from "react";
import {
  FaHome,
  FaBook,
  FaCertificate,
  FaCogs,
  FaHeadphones,
  FaPuzzlePiece,
  FaRegFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: <FaHome />, path: "/quizresult" },
  { label: "Study Materials", icon: <FaBook />, path: "/Study-Materials" },
  { label: "Courses", icon: <FaRegFileAlt />, path: "/courses" },
  {
    label: "Code Challenges",
    icon: <FaPuzzlePiece />,
    path: "/questions",
  },
  { label: "Certificate", icon: <FaCertificate />, path: "/certificate" },
];

const Sidebar = ({ open, setOpen, isMobile }) => {
  const location = useLocation();

  const handleMenuClick = () => {
    if (isMobile && setOpen) setOpen(false);
  };

  return (
    <div
      className={`flex flex-col h-full bg-white shadow-lg transition-all duration-300 ${
        open ? "w-64" : "w-15"
      } relative`}
      style={isMobile ? { width: '100%', maxWidth: 320, minWidth: 240, height: '100vh', paddingRight: 0 } : {}}
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 px-6 pt-8 pb-2">
          <div className="bg-purple-500 rounded-xl w-10 h-10 flex items-center justify-center text-white text-2xl font-bold">
            <span>C</span>
          </div>
          {open && (
            <span className="text-lg font-semibold text-[#2D1154] tracking-wide">
              Codelingo
            </span>
          )}
        </div>
      </div>
      {/* Profile */}
      {open && (
        <div className="flex items-center gap-3 bg-[#F8F8FA] rounded-lg px-3 py-2 mx-6 my-3 border border-[#E5E7EB]">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium text-[#9B9DA0] text-base flex-1">
            Scott M.
          </span>
          <svg width="16" height="16" fill="#9B9DA0" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.085l3.71-3.855a.75.75 0 1 1 1.08 1.04l-4.24 4.4a.75.75 0 0 1-1.08 0l-4.24-4.4a.75.75 0 0 1 .02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {/* Menu Items */}
      <nav className="flex-1 mt-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.disabled ? "#" : item.path}
              className={`flex items-center gap-3 px-6 py-2 my-1 rounded-lg transition-colors select-none
          ${isActive ? "bg-[#EDE8FF]" : ""}
          ${
            item.disabled ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
          }
        `}
              onClick={handleMenuClick}
            >
              <span
                className={`text-xl ${
                  isActive ? "text-[#7C3AED]" : "text-[#9B9DA0]"
                } ${item.disabled ? "opacity-60" : ""}`}
              >
                {item.icon}
              </span>
              {open && (
                <span
                  className={`text-base ${
                    isActive
                      ? "text-[#7C3AED] font-medium"
                      : "text-[#9B9DA0] font-normal"
                  } ${item.disabled ? "opacity-60" : ""}`}
                >
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
      {/* Bottom Settings/Support */}
      <div className="mt-auto mb-6">
        <div
          className={`flex items-center gap-3 px-6 py-2 rounded-lg text-[#9B9DA0] hover:bg-gray-50 cursor-pointer`}
          onClick={handleMenuClick}
        >
          <span className="text-xl">
            <FaCogs />
          </span>
          {open && <span className="text-base font-normal">Settings</span>}
        </div>
        <div
          className={`flex items-center gap-3 px-6 py-2 rounded-lg text-[#9B9DA0] hover:bg-gray-50 cursor-pointer mt-1`}
          onClick={handleMenuClick}
        >
          <span className="text-xl">
            <FaHeadphones />
          </span>
          {open && <span className="text-base font-normal">Support</span>}
        </div>
        <div
          className={`flex items-center gap-3 px-6 py-2 rounded-lg text-[#9B9DA0] hover:bg-gray-50 cursor-pointer`}
          onClick={handleMenuClick}
        >
          <span className="text-xl">
            <FaSignOutAlt />
          </span>
          {open && <span className="text-base font-normal">Logout</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
