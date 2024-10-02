// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Us Section */}
          <div>
            <h3 className="text-xl  mb-4">About Us</h3>
            <p className="text-gray-400">
              We provide the best learning materials for students across all grades. Our mission is to make education accessible and fun for everyone.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link to="/courses" className="hover:underline text-gray-400">Courses</Link>
              </li> */}
              <li>
                <Link to="/online" className="hover:underline text-gray-400">Online Classes</Link>
              </li>
              <li>
                <Link to="/ncert" className="hover:underline text-gray-400">NCERT Solutions</Link>
              </li>
              {/* <li>
                <Link to="/contact" className="hover:underline text-gray-400">Contact Us</Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              Email: info@educationplatform.com
            </p>
            <p className="text-gray-400">
              Phone: +1 (123) 456-7890 
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.36 5.64a9 9 0 1 0 0 12.72 9 9 0 0 0 0-12.72zM15.9 8.25a.89.89 0 0 1-.89.89h-1.78a.89.89 0 0 1-.89-.89V6.47a.89.89 0 0 1 .89-.89h1.78a.89.89 0 0 1 .89.89v1.78zm-3.7 2.67a2.66 2.66 0 0 1 2.67-2.67h1.78a2.66 2.66 0 0 1 2.67 2.67v1.78a2.66 2.66 0 0 1-2.67 2.67h-1.78a2.66 2.66 0 0 1-2.67-2.67v-1.78zm-.89 4a1.33 1.33 0 0 0 0 2.66h1.78a1.33 1.33 0 0 0 0-2.66h-1.78z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3.17 4.26a4.48 4.48 0 0 0-.6 2.25 4.48 4.48 0 0 0 2 3.74A4.47 4.47 0 0 1 2 9.5v.05a4.48 4.48 0 0 0 3.55 4.38 4.48 4.48 0 0 1-2 .08 4.48 4.48 0 0 0 4.19 3.12A9 9 0 0 1 1 19.56a12.68 12.68 0 0 0 6.88 2 12.68 12.68 0 0 0 12.69-12.69v-.58A9.12 9.12 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.6 3H4.4A1.4 1.4 0 0 0 3 4.4v15.2A1.4 1.4 0 0 0 4.4 21h8.19v-7.24H10v-3.24h2.59v-2.4c0-2.53 1.55-3.92 3.83-3.92 1.09 0 2.03.08 2.31.12v2.67h-1.59c-1.25 0-1.49.59-1.49 1.46v1.92h3l-.39 3.24h-2.61V21H19.6a1.4 1.4 0 0 0 1.4-1.4V4.4A1.4 1.4 0 0 0 19.6 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 Education Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
