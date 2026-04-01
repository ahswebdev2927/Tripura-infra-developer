// 'use client';

// import { Phone } from 'lucide-react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { useEffect, useState } from 'react';

// const FloatingButtons = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener('resize', checkMobile);
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   // Close menu when clicking outside on mobile
//   useEffect(() => {
//     if (!menuOpen || !isMobile) return;

//     const handleClickOutside = (e: MouseEvent) => {
//       if (!(e.target as Element).closest('.floating-menu')) {
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [menuOpen, isMobile]);

//   // Add CSS styles for animations
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       .btn-glow::before {
//         content: '';
//         position: absolute;
//         border-radius: 50%;
//         left: -6px;
//         top: -6px;
//         right: -6px;
//         bottom: -6px;
//         border: 2px solid;
//         opacity: 0;
//         animation: glowRing 2s ease-out infinite;
//       }

//       .btn-glow-whatsapp::before {
//         border-color: #25D366;
//       }

//       .btn-glow-call::before {
//         border-color: #F8523A;
//       }

//       @keyframes glowRing {
//         0% {
//           transform: scale(0.95);
//           opacity: 0;
//         }
//         50% {
//           opacity: 0.8;
//         }
//         100% {
//           transform: scale(1.1);
//           opacity: 0;
//         }
//       }

//       .btn-float:hover {
//         animation: glowPulse 0.8s ease-in-out;
//       }

//       @keyframes glowPulse {
//         0% { 
//           box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7),
//                       0 10px 25px -5px rgba(37, 211, 102, 0.3); 
//         }
//         70% { 
//           box-shadow: 0 0 0 12px rgba(37, 211, 102, 0),
//                       0 15px 30px -5px rgba(37, 211, 102, 0.4); 
//         }
//         100% { 
//           box-shadow: 0 0 0 0 rgba(37, 211, 102, 0),
//                       0 10px 25px -5px rgba(37, 211, 102, 0.3); 
//         }
//       }

//       .btn-float-call:hover {
//         animation: glowPulseCall 0.8s ease-in-out;
//       }

//       @keyframes glowPulseCall {
//         0% { 
//           box-shadow: 0 0 0 0 rgba(248, 82, 58, 0.7),
//                       0 10px 25px -5px rgba(248, 82, 58, 0.3); 
//         }
//         70% { 
//           box-shadow: 0 0 0 12px rgba(248, 82, 58, 0),
//                       0 15px 30px -5px rgba(248, 82, 58, 0.4); 
//         }
//         100% { 
//           box-shadow: 0 0 0 0 rgba(248, 82, 58, 0),
//                       0 10px 25px -5px rgba(248, 82, 58, 0.3); 
//         }
//       }

//       .animate-float {
//         animation: float 3s ease-in-out infinite;
//       }

//       @keyframes float {
//         0%, 100% {
//           transform: translateY(0);
//         }
//         50% {
//           transform: translateY(-8px);
//         }
//       }

//       .whatsapp-icon {
//         filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   // Mobile version with glowing effects - ALWAYS VISIBLE
//   if (isMobile) {
//     return (
//       <div className="fixed z-[9999] bottom-6 right-4 transition-all duration-300 opacity-100 translate-y-0">
//         <div className="relative floating-menu">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="btn-float btn-glow btn-glow-whatsapp w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 animate-float"
//             aria-label="Contact options"
//           >
//             <div className="relative whatsapp-icon">
//               <FaWhatsapp className="w-8 h-8" />
//             </div>
//           </button>
          
//           {/* Floating Menu */}
//           <div className={`absolute bottom-full mb-3 right-0 transition-all duration-300 ${
//             menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//           }`}>
//             <div className="bg-white rounded-xl shadow-2xl p-2 min-w-[200px] border border-gray-200">
//               <a
//                 href="https://wa.me/918501050907"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center w-full px-4 py-3 text-gray-800 hover:bg-green-50 rounded-lg transition-colors mb-1 group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
//                   <div className="text-white">
//                     <FaWhatsapp size={20} />
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-900">WhatsApp</div>
//                   <div className="text-sm text-gray-500">Instant response</div>
//                 </div>
//                 <div className="text-green-600">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </a>
              
//               <a
//                 href="tel:+918501050907"
//                 className="flex items-center w-full px-4 py-3 text-gray-800 hover:bg-red-50 rounded-lg transition-colors group"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F8523A] to-[#FF6B4A] flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
//                   <Phone className="w-5 h-5 text-white" />
//                 </div>
//                 <div className="flex-1">
//                   <div className="font-semibold text-gray-900">Call Now</div>
//                   <div className="text-sm text-gray-500">+91 85010 50907</div>
//                 </div>
//                 <div className="text-red-600">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </a>
//             </div>
            
//             {/* Arrow pointer */}
//             <div className="absolute top-full right-4 transform -translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-gray-200"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Desktop version with glowing effects - ALWAYS VISIBLE
//   return (
//     <>
//       {/* WhatsApp Button - Desktop */}
//       <a
//         href="https://wa.me/9100609609"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="btn-float btn-glow btn-glow-whatsapp fixed z-[9999] w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 group animate-float bottom-6 right-6 opacity-100"
//         aria-label="Chat on WhatsApp"
//       >
//         <div className="relative whatsapp-icon">
//           <FaWhatsapp className="w-8 h-8" />
//         </div>
//         <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
//           Chat on WhatsApp
//           <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
//         </span>
//       </a>

//       {/* Call Button - Desktop */}
//       <a
//         href="tel:+91 9100609609"
//         className="btn-float-call btn-glow btn-glow-call fixed z-[9999] w-16 h-16 bg-gradient-to-br from-[#F8523A] via-[#FF6B4A] to-[#FF8A65] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 group animate-float bottom-6 left-6 opacity-100"
//         aria-label="Call Now"
//       >
//         <div className="relative">
//           <Phone className="w-6 h-6" />
//         </div>
//         <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
//           Call Now
//           <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
//         </span>
//       </a>
//     </>
//   );
// };

// export default FloatingButtons;

'use client';

import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const FloatingButtons = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Add CSS styles for animations (unchanged)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .btn-glow::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        left: -6px;
        top: -6px;
        right: -6px;
        bottom: -6px;
        border: 2px solid;
        opacity: 0;
        animation: glowRing 2s ease-out infinite;
      }

      .btn-glow-whatsapp::before {
        border-color: #25D366;
      }

      .btn-glow-call::before {
        border-color: #F8523A;
      }

      @keyframes glowRing {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          transform: scale(1.1);
          opacity: 0;
        }
      }

      .btn-float:hover {
        animation: glowPulse 0.8s ease-in-out;
      }

      @keyframes glowPulse {
        0% { 
          box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7),
                      0 10px 25px -5px rgba(37, 211, 102, 0.3); 
        }
        70% { 
          box-shadow: 0 0 0 12px rgba(37, 211, 102, 0),
                      0 15px 30px -5px rgba(37, 211, 102, 0.4); 
        }
        100% { 
          box-shadow: 0 0 0 0 rgba(37, 211, 102, 0),
                      0 10px 25px -5px rgba(37, 211, 102, 0.3); 
        }
      }

      .btn-float-call:hover {
        animation: glowPulseCall 0.8s ease-in-out;
      }

      @keyframes glowPulseCall {
        0% { 
          box-shadow: 0 0 0 0 rgba(248, 82, 58, 0.7),
                      0 10px 25px -5px rgba(248, 82, 58, 0.3); 
        }
        70% { 
          box-shadow: 0 0 0 12px rgba(248, 82, 58, 0),
                      0 15px 30px -5px rgba(248, 82, 58, 0.4); 
        }
        100% { 
          box-shadow: 0 0 0 0 rgba(248, 82, 58, 0),
                      0 10px 25px -5px rgba(248, 82, 58, 0.3); 
        }
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      .whatsapp-icon {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Mobile version: two separate buttons (left = call, right = WhatsApp)
  if (isMobile) {
    return (
      <>
        {/* WhatsApp Button - Mobile */}
        <a
          href="https://wa.me/+919100609609"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-float btn-glow btn-glow-whatsapp fixed z-[9999] w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 animate-float bottom-4 right-4 opacity-100"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative whatsapp-icon">
            <FaWhatsapp className="w-7 h-7" />
          </div>
        </a>

        {/* Call Button - Mobile */}
        <a
          href="tel:+9100609609"
          className="btn-float-call btn-glow btn-glow-call fixed z-[9999] w-14 h-14 bg-gradient-to-br from-[#F8523A] via-[#FF6B4A] to-[#FF8A65] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 animate-float bottom-4 left-4 opacity-100"
          aria-label="Call Now"
        >
          <div className="relative">
            <Phone className="w-5 h-5" />
          </div>
        </a>
      </>
    );
  }

  // Desktop version: two separate buttons with tooltips
  return (
    <>
      {/* WhatsApp Button - Desktop */}
      <a
        href="https://wa.me/+919100609609"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-float btn-glow btn-glow-whatsapp fixed z-[9999] w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 group animate-float bottom-6 right-6 opacity-100"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative whatsapp-icon">
          <FaWhatsapp className="w-8 h-8" />
        </div>
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Chat on WhatsApp
          <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </span>
      </a>

      {/* Call Button - Desktop */}
      <a
        href="tel:+919100609609"
        className="btn-float-call btn-glow btn-glow-call fixed z-[9999] w-16 h-16 bg-gradient-to-br from-[#F8523A] via-[#FF6B4A] to-[#FF8A65] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transform transition-all duration-300 group animate-float bottom-6 left-6 opacity-100"
        aria-label="Call Now"
      >
        <div className="relative">
          <Phone className="w-6 h-6" />
        </div>
        <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          Call Now
          <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;