import React from 'react';
import { Link } from 'react-router-dom';

function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-6 gap-x-12 text-center">
        {/* Logo */}
        <Link to={'/'} className="flex items-center">
          <img src="/logoo.jpg" alt="Logo" className="w-26 h-9" />
        </Link>  

        {/* Navigation Links */}
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="/about" 
              className="font-normal text-blue-gray-600 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/upcoming" 
              className="font-normal text-blue-gray-600 transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Upcoming
            </Link>
          </li>
        </ul>
      </div>
      {/* Separator */}
      <hr className="my-2 border-blue-gray-300" />
      {/* Copyright Notice */}
      <div className="text-center font-normal text-blue-gray-600">
        &copy; 2024 eveHorizon
      </div>
    </footer>
  );
}

export default FooterWithLogo;
