import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masonry from '../components/Masonry';

const AuthPage: React.FC = () => {
  // Masonry background items
  const medicalItems = [
    { id: '2', img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=750&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100', url: '#', height: 750 },
    { id: '4', img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=500&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100', url: '#', height: 500 },
    { id: '5', img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=650&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100', url: '#', height: 650 },
    { id: '6', img: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&h=850&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100', url: '#', height: 850 },
    { id: '13', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&h=650&fit=crop&crop=center&auto=format&cs=tinysrgb&sat=-100', url: '#', height: 650 },
    { id: '14', img: '/assets/medicalimages/1a2d4bb2d72224f687f8e65befccc027.jpg?sat=-100', url: '#', height: 750 },
    { id: '15', img: '/assets/medicalimages/2029313ad5be146a1f4b9b739a572d10.jpg?sat=-100', url: '#', height: 500 },
    { id: '16', img: '/assets/medicalimages/3ad3055735ff083eee0bd9d6f35dc38d.jpg?sat=-100', url: '#', height: 650 },
    { id: '17', img: '/assets/medicalimages/a92b64e1d66d35633eae7bd9d38874fd.jpg?sat=-100', url: '#', height: 850 },
    { id: '18', img: '/assets/medicalimages/c7388c7d8adcbaf5771c360070bdaf4d.jpg?sat=-100', url: '#', height: 900 },
    { id: '19', img: '/assets/medicalimages/ec90c4e6d5683f9808eb7f315556824a.jpg?sat=-100', url: '#', height: 650 },
    { id: '20', img: '/assets/medicalimages/f72d7b3a8b7b2b63580f70aab8799ebe.jpg?sat=-100', url: '#', height: 750 }
  ];
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Masonry page background */}
      <div className="absolute inset-0 w-full h-full grayscale overflow-hidden">
        <Masonry
          items={medicalItems}
          ease="sine.out"
          duration={1}
          stagger={0.09}
          animateFrom="random"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>
       {/* Background with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
       
       <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md border border-white border-opacity-20">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300 mb-6 flex items-center transition-colors text-2xl"
          style={{ 
            fontFamily: 'Georgia, "Times New Roman", serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
          }}
        >
          ←
        </button>
        
        <div className="text-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 120"
            width="300"
            height="60"
            className="mb-4 mx-auto"
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
                textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }}
            >
              <tspan fontWeight="700">Care</tspan>
              <tspan fontWeight="400">Cloud</tspan>
            </text>
          </svg>
          
          <h1 className="text-2xl font-serif text-white mb-2"
              style={{ 
                fontFamily: 'Georgia, "Times New Roman", serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}>
            {isLogin ? 'Welcome Back' : 'Join CareCloud'}
          </h1>
          <p className="text-white text-opacity-80 text-sm"
             style={{ 
               fontFamily: 'Georgia, "Times New Roman", serif',
               textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
             }}>
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>
        
        <form>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-2"
                   style={{ 
                     fontFamily: 'Georgia, "Times New Roman", serif',
                     textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                   }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-white mb-2"
                   style={{ 
                     fontFamily: 'Georgia, "Times New Roman", serif',
                     textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                   }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            />
          </div>
          {!isLogin && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2"
                     style={{ 
                       fontFamily: 'Georgia, "Times New Roman", serif',
                       textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                     }}>
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-lg text-white placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:border-transparent"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg mb-4"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <p className="text-sm text-center text-white text-opacity-80"
           style={{ 
             fontFamily: 'Georgia, "Times New Roman", serif',
             textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
           }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white hover:text-gray-300 underline transition-colors"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
