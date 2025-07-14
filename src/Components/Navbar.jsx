import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-cols justify-evenly items-center bg-gray-800 text-white p-4 shadow-md">
      <div>
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <div className="flex gap-5">
        <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        <Link to="/services" className="text-white hover:text-gray-400">Services</Link>
        <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
      </div>
      <div>
        <Link to="/login" className="text-white hover:text-gray-400">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
