import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is open

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null); // Close if the same menu is clicked again
    } else {
      setActiveDropdown(menu); // Open the clicked menu
    }
  };

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4 relative z-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to=''>
          <img
            src={logo}
            alt="Logo"
            className="h-24 w-24 rounded-full"/>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          {/* Courses */}
          <div className="group relative z-10">
            <Link to="#" className="text-lg font-semibold hover:text-blue-500">
              Courses
            </Link>
            {/* Dropdown */}
              <div className="absolute left-0 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-20">
              <Link to="/class3" className="block px-4 py-2 hover:bg-gray-200">Class 3</Link>
              <Link to="/class4" className="block px-4 py-2 hover:bg-gray-200">Class 4</Link>
              <Link to="/class5" className="block px-4 py-2 hover:bg-gray-200">Class 5</Link>
              <Link to="/class6" className="block px-4 py-2 hover:bg-gray-200">Class 6</Link>
              <Link to="/class7" className="block px-4 py-2 hover:bg-gray-200">Class 7</Link>
              <Link to="/class8" className="block px-4 py-2 hover:bg-gray-200">Class 8</Link>
              <Link to="/class9" className="block px-4 py-2 hover:bg-gray-200">Class 9</Link>
              <Link to="/class10" className="block px-4 py-2 hover:bg-gray-200">Class 10</Link>
              <Link to="/class11" className="block px-4 py-2 hover:bg-gray-200">Class 11</Link>
              <Link to="/class12" className="block px-4 py-2 hover:bg-gray-200">Class 12</Link>
            </div>
          </div>
          {/* Courses for Kids */}
          <div className="group relative z-10">
            {/* <Link to="/courses" className="text-lg font-semibold hover:text-blue-500">
              Courses for Kids
            </Link> */}
            {/* Dropdown */}
            {/* <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-20">
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Course A</Link>
              <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Course B</Link>
            </div> */}
          </div>

          {/* Free Study Material */}
          <div className="group relative z-10">
            <Link to='' className="text-lg font-semibold hover:text-blue-500">
              Free Study Material
            </Link>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block z-20">
              <Link to="/ncert" className="block px-4 py-2 hover:bg-gray-200">NCERT Solution</Link>
              <Link to="/cbse" className="block px-4 py-2 hover:bg-gray-200">CBSE Material</Link>
              <Link to="/jee" className="block px-4 py-2 hover:bg-gray-200">JEE Main</Link>
              <Link to="/jeeadv" className="block px-4 py-2 hover:bg-gray-200">JEE Advanced</Link>
              <Link to="/neet" className="block px-4 py-2 hover:bg-gray-200">NEET </Link>
            </div>
          </div>
          {/* Online Courses */}
          <div>
            <Link to="/online" className="text-lg font-semibold hover:text-blue-500">
              Online Courses
            </Link>
          </div>
        </div>
        {/* Search bar */}
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-1"/>
          <button className="ml-2 text-white bg-blue-500 rounded-full px-4 py-1">
            Search 
          </button>
        </div>
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 z-10">
          {/* Courses Dropdown */}
          <div>
            <button onClick={() => toggleDropdown('courses')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
              Courses
            </button>
            {activeDropdown === 'courses' && (
              <div className="pl-4">
                <Link to="/class3" className="block px-4 py-2 hover:bg-gray-200">Class 3</Link>
              <Link to="/class4" className="block px-4 py-2 hover:bg-gray-200">Class 4</Link>
              <Link to="/class5" className="block px-4 py-2 hover:bg-gray-200">Class 5</Link>
              <Link to="/class6" className="block px-4 py-2 hover:bg-gray-200">Class 6</Link>
              <Link to="/class7" className="block px-4 py-2 hover:bg-gray-200">Class 7</Link>
              <Link to="/class8" className="block px-4 py-2 hover:bg-gray-200">Class 8</Link>
              <Link to="/class9" className="block px-4 py-2 hover:bg-gray-200">Class 9</Link>
              <Link to="/class10" className="block px-4 py-2 hover:bg-gray-200">Class 10</Link>
              <Link to="/class11" className="block px-4 py-2 hover:bg-gray-200">Class 11</Link>
              <Link to="/class12" className="block px-4 py-2 hover:bg-gray-200">Class 12</Link>
              </div>
            )}
          </div>

          {/* Courses for Kids Dropdown */}
          {/* <div>
            <button onClick={() => toggleDropdown('kids')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
              Courses for Kids
            </button>
            {activeDropdown === 'kids' && (
              <div className="pl-4">
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Course A</Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Course B</Link>
              </div>
            )}
          </div> */}
          {/* Free Study Material Dropdown */}
          <div>
            <button onClick={() => toggleDropdown('material')} className="block px-4 py-2 w-full text-left hover:bg-gray-200">
              Free Study Material
            </button>
            {activeDropdown === 'material' && (
              <div className="pl-4">
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Material 1</Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Material 2</Link>
              </div>
            )}
          </div>
          {/* Online Courses */}
          <Link to="#" className="block px-4 py-2 hover:bg-gray-200">Online Courses</Link>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full px-4 py-2 my-2"/>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
