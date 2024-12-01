/* eslint-disable @next/next/no-img-element */
// components/Navbar.js
"use client";


import { useState, useEffect } from 'react';
import './navbar.css';


const Navbar = () => {
  const [, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className='px-0'>
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between nav-head py-3 px-0">
        <div className="text-lg font-bold px-0">
          <img src="/images/mg_brand.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;