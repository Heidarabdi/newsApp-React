import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiBars3BottomRight, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';

export const navBar = [
  { to: '/', name: 'Home' },
  { to: '/Technology', name: 'Technology' },
  { to: '/sports', name: 'Sports' },
  { to: '/business', name: 'Business' },
  { to: '/entertainment', name: 'Entertainment' },
  { to: '/science', name: 'Science' },
];

function Navbar() {
  const [hover, setHover] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentIndex = navBar.findIndex((item) => item.to === currentPath);
    setHover(currentIndex);
  }, [location.pathname, navBar]);

  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
      navbar.classList.add('shadow-md');
    }
  };
  const search=()=>{
    navigation('/search');
    setOpen(false);

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar w-full h-15 bg-[#fff] mb-2 shadow-md p-2 z-50">
      {/* Desktop view */}
      <nav className="flex items-center justify-between text-[#2A2A2A] px-3 md:px-8">
        <h1 onClick={() => navigation('/')} className="font-[MaryToddW00-Regular] text-2xl md:text-4xl cursor-pointer">NEWSLETTER</h1>
        <div className={`hidden md:block font-[MaryToddW00-Regular] text-2xl space-x-4  `}>
          {navBar.map((item, index) => (
            <Link
              className={`${hover === index ? 'underline underline-offset-4 decoration-4 decoration-red-500' : 'hover:underline underline-offset-4 decoration-blue-700 decoration-4'}`}
              to={item.to}
              key={index}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="text-black space-x-3">
          <button>
            <HiMagnifyingGlass
              className="w-7 h-7"
              onClick={() => navigation('/search')}
            />
          </button>
          <button>
            <HiBars3BottomRight className="w-7 h-7" onClick={() => setOpen(!open)} />
          </button>
        </div>
      </nav>
      {/* Mobile view */}
      <div className={`flex flex-col ${open ? 'absolute' : 'hidden'} z-20 bg-white right-0 top-0 md:w-[25rem] w-full drop-shadow-2xl shadow-black h-screen text-center transition-all duration-800 ease-in-out`}>
        <div className="flex justify-between items-center text-black px-3 mt-4 shadow-md">
          <HiXMark className="w-7 h-7 mt-1 ml-1 cursor-pointer" onClick={() => setOpen(!open)} />
          <h1 onClick={() => navigation('/')} className="font-[MaryToddW00-Regular] text-2xl md:text-4xl cursor-pointer mt-2">NEWSLETTER</h1>
          <button>
            <HiMagnifyingGlass
              className="w-7 h-7"
              onClick={search}
              />
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <div className="flex flex-col items-center font-[MaryToddW00-Regular] text-2xl space-x-4 mt-5">
            {navBar.map((item, index) => (
              <Link
                className={`${hover === index ? 'underline underline-offset-4 decoration-4 decoration-red-500' : 'hover:underline underline-offset-4 decoration-blue-700 decoration-4'}`}
                to={item.to}
                key={index}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
