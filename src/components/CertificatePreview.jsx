import React, { useState, useEffect } from 'react';
import { Award, Download, Eye, Star, Zap, Code, Brain } from 'lucide-react';

const CertificatePreview = () => {
  const [selectedCert, setSelectedCert] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const certificates = [
    {
      title: "Full Stack Web Development",
      level: "Advanced",
      duration: "12 Weeks",
      skills: ["React", "Node.js", "MongoDB", "TypeScript"],
      color: "from-purple-600 via-purple-700 to-blue-800",
      accent: "purple"
    },
    {
      title: "AI & Machine Learning",
      level: "Expert",
      duration: "16 Weeks",
      skills: ["Python", "TensorFlow", "PyTorch", "Neural Networks"],
      color: "from-emerald-600 via-teal-700 to-cyan-800",
      accent: "emerald"
    },
    {
      title: "Mobile App Development",
      level: "Intermediate",
      duration: "10 Weeks",
      skills: ["React Native", "Flutter", "Firebase", "Redux"],
      color: "from-orange-600 via-red-700 to-pink-800",
      accent: "orange"
    }
  ];

  const currentCert = certificates[selectedCert];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-slate-400 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-800 via-indigo-700 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            Your Digital
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 bg-clip-text text-transparent">
              Achievement
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Earn industry-recognized certificates that showcase your coding mastery and unlock new career opportunities
          </p>
        </div>

        {/* Certificate Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {certificates.map((cert, index) => (
            <button
              key={index}
              onClick={() => setSelectedCert(index)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCert === index
                  ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-600/25'
                  : 'bg-white/80 text-slate-700 border border-slate-200 hover:bg-white hover:shadow-lg'
              }`}
            >
              {cert.title}
            </button>
          ))}
        </div>

        {/* Main Certificate Display */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Card */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${currentCert.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
            
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-500 group-hover:scale-105">
              {/* Certificate Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${currentCert.color} rounded-xl flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">Let's Code Brain</h3>
                    <p className="text-sm text-slate-600">Certification Authority</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-2">
                  Certificate of Completion
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
                <p className="text-lg text-slate-600 mb-4">This certifies that</p>
                <p className="text-2xl font-bold text-slate-800 mb-4">[Student Name]</p>
                <p className="text-lg text-slate-600 mb-2">has successfully completed</p>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
                  {currentCert.title}
                </h3>
              </div>

              {/* Skills Badge */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {currentCert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 bg-gradient-to-r ${currentCert.color} text-white text-sm rounded-full font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Footer */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-200">
                <div className="text-sm text-slate-600">
                  <p>Duration: {currentCert.duration}</p>
                  <p>Level: {currentCert.level}</p>
                </div>
                <div className="text-sm text-slate-600 text-right">
                  <p>Issue Date: {new Date().toLocaleDateString()}</p>
                  <p>Certificate ID: #LCB{Math.random().toString(36).substr(2, 6).toUpperCase()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-amber-500" />
                <h3 className="text-xl font-bold text-slate-800">What You'll Achieve</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Industry-recognized digital certificate
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Verifiable blockchain-secured credentials
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  LinkedIn profile integration ready
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Career advancement opportunities
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-800">Skills Mastered</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {currentCert.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-lg p-3 text-center border border-slate-200 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <span className="text-slate-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                Preview Certificate
              </button>
              <button className="flex-1 bg-white/90 backdrop-blur-md text-slate-700 py-4 px-6 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Sample
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10,000+", label: "Certificates Issued", icon: Award },
            { number: "95%", label: "Career Success Rate", icon: Star },
            { number: "50+", label: "Industry Partners", icon: Zap }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <stat.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-3xl font-black text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
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
      `}</style>
    </div>
  );
};

export default CertificatePreview;