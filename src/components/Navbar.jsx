import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../assets/kshama.jpg';

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
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex items-center" to="">
          <img src={logo2} alt="Logo" className="w-28 h-28 rounded-full" />
        </Link>
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
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:space-x-6 text-gray-700">
            <li className="relative">
              <button
                className="py-2 px-4 hover:text-gray-900 focus:outline-none"
                onClick={() => handleDropdown(1)}
              >
                Courses
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md ${
                  dropdownOpen === 1 ? 'block' : 'hidden'
                }`}
              >
                {['Class 3rd', 'Class 4th', 'Class 5th', 'Class 6th', 'Class 7th', 'Class 8th', 'Class 9th', 'Class 10th', 'Class 11th', 'Class 12th'].map(
                  (course, index) => (
                    <li key={index}>
                      <Link
                        className="block px-4 py-2 hover:bg-gray-100"
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
              <Link className="py-2 px-4 hover:text-gray-900" to="courses">
                Courses for Kids
              </Link>
            </li>
            <li className="relative">
              <button
                className="py-2 px-4 hover:text-gray-900 focus:outline-none"
                onClick={() => handleDropdown(2)}
              >
                Free study material
              </button>
              <ul
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md ${
                  dropdownOpen === 2 ? 'block' : 'hidden'
                }`}
              >
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    to="ncert"
                  >
                    NCERT Solution
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-100" to="cbse">
                    CBSE
                  </Link>
                </li>
                <li>
                  <hr className="border-t border-gray-200" />
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-100" to="jee">
                    JEE Main
                  </Link>
                </li>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    to="jeeadv"
                  >
                    JEE Advanced
                  </Link>
                </li>
                <li>
                  <Link className="block px-4 py-2 hover:bg-gray-100" to="neet">
                    NEET
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="py-2 px-4 hover:text-gray-900" to="online">
                Online Courses
              </Link>
            </li>
          </ul>
          <form className="mt-4 lg:mt-0 lg:flex">
            <input
              className="px-4 w-60 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="ml-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
