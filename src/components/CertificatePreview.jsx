import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const CertificatePreview = () => {
  const [selectedCert, setSelectedCert] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const { darkMode } = useDarkMode();

  // Set visibility for animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate floating particles - reduced count for mobile
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const particleCount = window.innerWidth < 768 ? 20 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
    
    // Regenerate particles on window resize
    const handleResize = () => generateParticles();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const certificates = [
    {
      title: "Course Program",
      type: "Course",
      level: "Advanced",
      duration: "12 Weeks",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      color: "from-purple-600 via-purple-700 to-blue-800",
      accent: "purple"
    },
    {
      title: "Internship Program",
      type: "Internship",
      level: "Professional",
      duration: "16 Weeks",
      skills: ["React", "Express.js", "MongoDB", "REST APIs", "Git", "Agile Methodology"],
      color: "from-emerald-600 via-teal-700 to-cyan-800",
      accent: "emerald"
    }
  ];

  const currentCert = certificates[selectedCert];

  // Simple SVG icons as components
  const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  );

  const StarIcon = ({ filled = false }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );

  const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );

  const ZapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );

  const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full opacity-20 ${
              darkMode ? 'bg-slate-600' : 'bg-slate-400'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs - Reduced size for mobile */}
      <div className={`absolute top-20 left-10 md:left-20 w-40 h-40 md:w-72 md:h-72 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse ${
        darkMode ? 'bg-blue-900' : 'bg-blue-200'
      }`}></div>
      <div className={`absolute top-40 right-10 md:right-20 w-48 h-48 md:w-96 md:h-96 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2000 ${
        darkMode ? 'bg-indigo-900' : 'bg-indigo-200'
      }`}></div>
      <div className={`absolute bottom-20 left-1/4 md:left-1/2 w-40 h-40 md:w-80 md:h-80 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000 ${
        darkMode ? 'bg-slate-800' : 'bg-slate-200'
      }`}></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Header Section with Updated Styling */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className={`font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 transition-all duration-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`} style={{ transitionDelay: '200ms' }}>
            Your Digital <span className="text-blue-600">Achievement</span>
          </h2>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Earn industry-recognized certificates that showcase your coding mastery and unlock new career opportunities
          </p>
        </div>

        {/* Certificate Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {certificates.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedCert(index)}
              className={`px-5 py-2.5 md:px-6 md:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCert === index
                  ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25'
                  : `${
                      darkMode 
                        ? 'bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-800 hover:shadow-lg' 
                        : 'bg-white/80 text-slate-700 border border-slate-200 hover:bg-white hover:shadow-lg'
                    }`
              }`}
            >
              {cert.type}
            </button>
          ))}
        </div>

        {/* Main Certificate Display */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Certificate Card */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${currentCert.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
            
            <div className={`relative backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border transform transition-all duration-500 group-hover:scale-105 ${
              darkMode 
                ? 'bg-slate-800/95 border-slate-700' 
                : 'bg-white/95 border-white/20'
            }`}>
              {/* Certificate Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${currentCert.color} rounded-xl flex items-center justify-center`}>
                    <AwardIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm md:text-base ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>Let's Code Brain</h3>
                    <p className={`text-xs md:text-sm ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>Certification Authority</p>
                  </div>
                </div>
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="text-center mb-6 md:mb-8">
                <h2 className={`text-xl md:text-2xl lg:text-3xl font-black mb-2 ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  Certificate of Completion
                </h2>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-4 md:mb-6"></div>
                <p className={`text-base md:text-lg mb-3 md:mb-4 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>This certifies that</p>
                <p className={`text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>[Student Name]</p>
                <p className={`text-base md:text-lg mb-2 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>has successfully completed</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4 md:mb-6">
                  {currentCert.title}
                </h3>
              </div>

              {/* Skills Badge */}
              <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-6">
                {currentCert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-2.5 py-1 text-xs md:text-sm bg-gradient-to-r ${currentCert.color} text-white rounded-full font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Footer */}
              <div className={`flex flex-col md:flex-row justify-between items-start md:items-center pt-4 md:pt-6 space-y-2 md:space-y-0 ${
                darkMode ? 'border-t border-slate-700' : 'border-t border-slate-200'
              }`}>
                <div className={`text-xs md:text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <p>Duration: {currentCert.duration}</p>
                  <p>Level: {currentCert.level}</p>
                </div>
                <div className={`text-xs md:text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                } md:text-right`}>
                  <p>Issue Date: {new Date().toLocaleDateString()}</p>
                  <p>Certificate ID: #LCB{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="space-y-6 md:space-y-8">
            <div className={`backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg border ${
              darkMode 
                ? 'bg-slate-800/90 border-slate-700' 
                : 'bg-white/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <ZapIcon className="w-5 h-5 md:w-6 md:h-6 text-amber-500" />
                <h3 className={`text-lg md:text-xl font-bold ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>What You'll Achieve</h3>
              </div>
              <ul className={`space-y-2 md:space-y-3 text-sm md:text-base ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full flex-shrink-0"></div>
                  Industry-recognized digital certificate
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  Verifiable blockchain-secured credentials
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                  LinkedIn profile integration ready
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  Career advancement opportunities
                </li>
              </ul>
            </div>

            <div className={`backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg border ${
              darkMode 
                ? 'bg-slate-800/90 border-slate-700' 
                : 'bg-white/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <CodeIcon className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                <h3 className={`text-lg md:text-xl font-bold ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>Skills Mastered</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {currentCert.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-2 md:p-3 text-center border transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-700' 
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span className={`text-xs md:text-sm font-medium ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-2xl font-bold text-base md:text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <EyeIcon className="w-4 h-4 md:w-5 md:h-5" />
                Preview Certificate
              </button>
              <button className={`flex-1 backdrop-blur-md py-3 md:py-4 px-4 md:px-6 rounded-2xl font-bold text-base md:text-lg border transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                darkMode 
                  ? 'bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-800 hover:shadow-lg' 
                  : 'bg-white/90 text-slate-700 border-slate-200 hover:bg-white hover:shadow-lg'
              }`}>
                <DownloadIcon className="w-4 h-4 md:w-5 md:h-5" />
                Download Sample
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            { number: "10,000+", label: "Certificates Issued", icon: AwardIcon },
            { number: "95%", label: "Career Success Rate", icon: StarIcon },
            { number: "50+", label: "Industry Partners", icon: ZapIcon }
          ].map((stat, index) => (
            <div key={index} className={`text-center backdrop-blur-md rounded-2xl p-4 md:p-6 border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'bg-slate-800/90 border-slate-700' 
                : 'bg-white/90 border-slate-200'
            }`}>
              <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-indigo-600 mx-auto mb-2 md:mb-3" />
              <div className={`text-xl md:text-2xl lg:text-3xl font-black mb-1 md:mb-2 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>{stat.number}</div>
              <div className={`text-xs md:text-sm font-medium ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) {
          .group:hover .group-hover\\:scale-105 {
            transform: scale(1);
          }
          .hover\\:scale-105:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default CertificatePreview;