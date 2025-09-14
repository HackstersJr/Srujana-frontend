import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const NavBar: React.FC = () => {
  const [active, setActive] = useState('Overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-4 inset-x-4 md:inset-x-8 z-20 bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex-shrink-0">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 600 120"
              width="180"
              height="50"
            >
              <title>CareCloud</title>
              <text
                x="0"
                y="80"
                fontFamily="Georgia, 'Times New Roman', serif"
                fontSize="80"
                fill="black"
              >
                <tspan fontWeight="700">Care</tspan>
                <tspan fontWeight="400">Cloud</tspan>
              </text>
            </svg>
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 overflow-x-auto">
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`px-3 py-1 rounded-md transition-colors ${
                active === item.label
                  ? 'bg-black text-white'
                  : 'text-black hover:bg-black hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => navigate('/auth')}
            className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/auth')}
            className="px-4 py-1 bg-gray-200 text-black rounded-md hover:bg-gray-300"
          >
            Sign Up
          </button>
        </div>
        <button
          className="md:hidden px-3 py-2 rounded-md bg-black text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-md mt-2 p-4">
          <div className="flex flex-col space-y-2">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-1 rounded-md transition-colors ${
                  active === item.label
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-black hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col space-y-2 mt-4">
            <button
              onClick={() => navigate('/auth')}
              className="px-4 py-1 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="px-4 py-1 bg-gray-200 text-black rounded-md hover:bg-gray-300"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
