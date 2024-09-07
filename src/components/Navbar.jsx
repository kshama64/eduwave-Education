import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <Link className="flex items-center" to="/">
          <img
            src={logo2}
            alt="Logo"
            className="w-28 h-28 rounded-full border-4 border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300"
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Menu Section */}
        <div
          className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-8 text-gray-700">
            <li className="relative">
              <button
                className="py-2 px-6 hover:text-gray-900 hover:bg-gray-200 rounded-md focus:outline-none transition duration-200"
                onClick={() => handleDropdown(1)}
              >
                Courses
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md z-50 ${
                  dropdownOpen === 1 ? 'block' : 'hidden'
                }`}
              >
                {['Class 3rd', 'Class 4th', 'Class 5th', 'Class 6th', 'Class 7th', 'Class 8th', 'Class 9th', 'Class 10th', 'Class 11th', 'Class 12th'].map(
                  (course, index) => (
                    <li key={index}>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                        to={`/class${index + 3}`}
                      >
                        {course}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </li>
            <li>
              <Link
                className="py-2 px-6 hover:text-gray-900 hover:bg-gray-200 rounded-md transition duration-200"
                to="/courses"
              >
                Courses for Kids
              </Link>
            </li>
            <li className="relative">
              <button
                className="py-2 px-6 hover:text-gray-900 hover:bg-gray-200 rounded-md focus:outline-none transition duration-200"
                onClick={() => handleDropdown(2)}
              >
                Free study material
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md z-50 ${
                  dropdownOpen === 2 ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                    to="/ncert"
                  >
                    NCERT Solution
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                    to="/cbse"
                  >
                    CBSE
                  </Link>
                </li>
                <li>
                  <hr className="border-t border-gray-200" />
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                    to="/jee"
                  >
                    JEE Main
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                    to="/jeeadv"
                  >
                    JEE Advanced
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900 transition duration-200"
                    to="/neet"
                  >
                    NEET
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                className="py-2 px-6 hover:text-gray-900 hover:bg-gray-200 rounded-md transition duration-200"
                to="/online"
              >
                Online Courses
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="mt-4 lg:mt-0 lg:flex items-center space-x-2 ml-16">
            <div className="relative">
              <input
                className="px-4 py-2 w-72 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 shadow-md"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <svg
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35"
                ></path>
              </svg>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}
