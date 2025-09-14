import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen sticky top-0 flex items-center justify-center pt-20">
      {/* Hero Content */}
      <div className="text-center z-20 relative w-full max-w-6xl mx-auto px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 600 120"
          className="mb-12 mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          width="100%"
          height="auto"
        >
          <title>CareCloud</title>
          <text
            x="300"
            y="80"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="80"
            fill="white"
            textAnchor="middle"
            style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.7)',
              filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
            }}
          >
            <tspan fontWeight="700">Care</tspan>
            <tspan fontWeight="400">Cloud</tspan>
          </text>
        </svg>
        
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-serif max-w-4xl mx-auto px-4 leading-relaxed text-center"
            style={{ 
              textShadow: '4px 4px 12px rgba(0,0,0,0.9), 2px 2px 6px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.2)',
              filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.3))',
              fontFamily: 'Georgia, "Times New Roman", serif'
            }}>
          From Chaos to Care: Intelligent Hospitals Powered by AI
        </h1>
        
        <div className="mt-16 flex justify-center">
          <button 
            onClick={() => navigate('/auth')}
            className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
