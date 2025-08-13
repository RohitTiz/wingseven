import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: HomeIcon, path: "/dashboard/quizresult" },
  { label: "Study Materials", icon: BookIcon, path: "/dashboard/study-materials" },
  { label: "Courses", icon: FileAltIcon, path: "/dashboard/courses" },
  { label: "Code Challenges", icon: PuzzlePieceIcon, path: "/dashboard/questions" },
  { label: "Certificate", icon: CertificateIcon, path: "/dashboard/certificate" },
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
              Lets Code Brain
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
            Rohit Rizz
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
          const IconComponent = item.icon;
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
                <IconComponent active={isActive} />
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
            <CogsIcon />
          </span>
          {open && <span className="text-base font-normal">Settings</span>}
        </div>
        <div
          className={`flex items-center gap-3 px-6 py-2 rounded-lg text-[#9B9DA0] hover:bg-gray-50 cursor-pointer mt-1`}
          onClick={handleMenuClick}
        >
          <span className="text-xl">
            <HeadphonesIcon />
          </span>
          {open && <span className="text-base font-normal">Support</span>}
        </div>
        <div
          className={`flex items-center gap-3 px-6 py-2 rounded-lg text-[#9B9DA0] hover:bg-gray-50 cursor-pointer`}
          onClick={handleMenuClick}
        >
          <span className="text-xl">
            <SignOutAltIcon />
          </span>
          {open && <span className="text-base font-normal">Logout</span>}
        </div>
      </div>
    </div>
  );
};

// SVG Icon Components
function HomeIcon({ active }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={active ? "#7C3AED" : "#9B9DA0"}>
      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
    </svg>
  );
}

function BookIcon({ active }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={active ? "#7C3AED" : "#9B9DA0"}>
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
    </svg>
  );
}

function FileAltIcon({ active }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={active ? "#7C3AED" : "#9B9DA0"}>
      <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
    </svg>
  );
}

function PuzzlePieceIcon({ active }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={active ? "#7C3AED" : "#9B9DA0"}>
      <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.026.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.112.112 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.51 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l-.001.008a.113.113 0 0 0 .012.026c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z"/>
    </svg>
  );
}

function CertificateIcon({ active }) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill={active ? "#7C3AED" : "#9B9DA0"}>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
      <path d="M7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
    </svg>
  );
}

function CogsIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#9B9DA0">
      <path d="M7 2.1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v.862c1.838.458 3.532 1.67 4.597 3.427l.743 1.28a.5.5 0 0 1 .17.45v1a.5.5 0 0 1-.17.45l-.743 1.28c-1.065 1.757-2.759 2.97-4.597 3.427V13.9a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-.862c-1.838-.458-3.532-1.67-4.597-3.427l-.743-1.28a.5.5 0 0 1-.17-.45v-1a.5.5 0 0 1 .17-.45l.743-1.28C3.468 3.228 5.162 2.016 7 1.558V2.1zm-5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm5-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#9B9DA0">
      <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
    </svg>
  );
}

function SignOutAltIcon() {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#9B9DA0">
      <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
      <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
    </svg>
  );
}

export default Sidebar;