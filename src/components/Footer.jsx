import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-white pt-[60px] px-[30px] pb-[20px] font-roboto text-sm">
      {/* Top section with navigational links */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-10 mb-10">
        {/* Categories column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Categories</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">User Interface</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">User Experience</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Digital Media</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Lifestyle</a>
        </div>

        {/* Product column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Product</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Pricing</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Overview</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Browse</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">
            Accessibility
            <span className="text-[10px] bg-[#e0d9ff] text-[#5b3cc4] px-1.5 py-0.5 rounded ml-1">BETA</span>
          </a>
        </div>

        {/* Solutions column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Solutions</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Brainstorming</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Ideation</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Wireframing</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Research</a>
        </div>

        {/* Resources column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Resources</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Help Center</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Blog</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Tutorials</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">FAQs</a>
        </div>

        {/* Support column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Support</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Contact Us</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Developers</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Documentation</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Integrations</a>
        </div>

        {/* Company column */}
        <div>
          <div className="font-bold mb-3 text-[15px]">Company</div>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">About</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Press</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Events</a>
          <a href="#" className="block mb-2 text-[#ccc] no-underline text-[13px]">Request Demo →</a>
        </div>
      </div>

      {/* Bottom row with legal and social links */}
      <div className="border-t border-[#333] pt-5 flex flex-wrap justify-between items-center text-[13px] text-[#888] gap-y-5 footer-bottom">
        {/* Left side: company info and legal links */}
        <div className="flex gap-5 flex-wrap items-center footer-left">
          <div>@ 2023 Company</div>
          <a href="#" className="block text-[#ccc] no-underline text-[13px]">Terms of Service</a>
          <a href="#" className="block text-[#ccc] no-underline text-[13px]">Privacy Policy</a>
          <a href="#" className="block text-[#ccc] no-underline text-[13px]">Manage Cookies</a>
        </div>

        {/* Right side: social media and store badges */}
        <div className="flex items-center gap-3 flex-wrap justify-end footer-right">
          <img src="footer/youtube.png" alt="YouTube" className="h-[18px]" />
          <img src="footer/facebook.png" alt="Facebook" className="h-[18px]" />
          <img src="footer/twitter.png" alt="Twitter" className="h-[18px]" />
          <img src="footer/instagram.png" alt="Instagram" className="h-[18px]" />
          <img src="footer/linkedin.png" alt="LinkedIn" className="h-[18px]" />
          <img src="footer/appstore.png" alt="App Store" className="h-8" />
          <img src="footer/googleplay.png" alt="Google Play" className="h-8" />
        </div>
      </div>

      {/* Responsive styles for mobile */}
      {/* 
        FIXED THE ERROR HERE:
        Changed from: <style jsx>{`...`}</style>
        To: <style jsx="true">{`...`}</style>
        This converts the boolean jsx attribute to a string value to prevent the React warning
      */}
      <style jsx="true">{`
        @media (max-width: 600px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-left,
          .footer-right {
            justify-content: flex-start !important;
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;