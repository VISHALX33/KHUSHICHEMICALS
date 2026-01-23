import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';

const ChemicalLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if loader has been shown before
    const hasShown = sessionStorage.getItem('loaderShown');
    
    if (hasShown) {
      setIsVisible(false);
    } else {
      // Hide loader after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('loaderShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-green-600 via-blue-600 to-green-700 flex items-center justify-center animate-fade-out">
      <div className="text-center">
        {/* Animated Flask Container */}
        <div className="relative mb-8">
          {/* Main Flask */}
          <div className="relative inline-block animate-bounce-slow">
            <FontAwesomeIcon 
              icon={faFlask} 
              className="text-9xl text-white drop-shadow-2xl"
            />
            
            {/* Bubbles Animation */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bubble bubble-1"></div>
              <div className="bubble bubble-2"></div>
              <div className="bubble bubble-3"></div>
              <div className="bubble bubble-4"></div>
              <div className="bubble bubble-5"></div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Company Name with Chemical Formula Style */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white mb-2 animate-fade-in-up">
            <span className="inline-block animate-slide-in-left">KHUSHI</span>
            <span className="inline-block ml-3 animate-slide-in-right text-green-200">CHEMICALS</span>
          </h1>
          
          {/* Chemical Formula Animation */}
          <div className="flex justify-center gap-4 text-2xl font-mono text-green-200 animate-fade-in-delayed">
            <span className="animate-chemical-fade">H₂SO₄</span>
            <span className="animate-chemical-fade animation-delay-200">NaOH</span>
            <span className="animate-chemical-fade animation-delay-400">HNO₃</span>
            <span className="animate-chemical-fade animation-delay-600">CH₃COOH</span>
          </div>

          {/* Loading Text */}
          <p className="text-xl text-white/90 animate-pulse mt-6">
            Quality Chemical Solutions
          </p>

          {/* Loading Dots */}
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-out {
          0% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes chemical-fade {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-fade-out {
          animation: fade-out 3s ease-in-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-chemical-fade {
          animation: chemical-fade 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .bubble {
          position: absolute;
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: bubble-rise 3s ease-in-out infinite;
        }

        .bubble-1 {
          left: -20px;
          animation-delay: 0s;
        }

        .bubble-2 {
          left: -10px;
          animation-delay: 0.5s;
        }

        .bubble-3 {
          left: 0px;
          animation-delay: 1s;
        }

        .bubble-4 {
          left: 10px;
          animation-delay: 1.5s;
        }

        .bubble-5 {
          left: 20px;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ChemicalLoader;
