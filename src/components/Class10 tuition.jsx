import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img2.jpg.png'

export default function Class12tuition() {
  return (
    <div className="class12 p-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
        Enrol For Online Tuition For Class 10 To Ace Board Exams
      </h2>
      <img src={img} alt="" className='w-full h-auto mb-6 max-w-screen-xl' />


      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link className="text-xl font-semibold text-gray-800" to="#">
              Book Online Demo
            </Link>
            <div className="lg:hidden">
              <button className="text-gray-800 focus:outline-none" type="button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center">
              <ul className="flex space-x-8">
                <li className="relative group">
                  <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center">
                    Tuition By Class
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/neet">NEET</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/jee">JEE</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class12">Class 12 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class11">Class 11 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="#">Class 10 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class9">Class 9 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class8">Class 8 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class7">Class 7 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class6">Class 6 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class5">Class 5 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class4">Class 4 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class3">Class 3 Tuition</Link></li>
                  </ul>
                </li>
                <li className="relative group">
                  <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center">
                    Tuition By Subject
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <li><Link className="block px-7 py-2 text-gray-800 hover:bg-gray-100" to="/physics">Physics</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/chemistry">Chemistry</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/biology">Biology</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/cm">Computer Science</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/math">Maths</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/science">Science</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/english">English</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/socialstudy">Social Study (All Subjects)</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/iti">ITI Foundation (All)</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <h2 className="text-xl md:text-2xl font-semibold text-center my-6">
        Master All Subjects with Online Tuition for Class 10
      </h2>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">S.No.</th>
            <th className="border border-gray-300 px-4 py-2">Subject wise Tuition for Class 12</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1</td>
            <td className="border border-gray-300 px-4 py-2">Physics Tuition</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">2</td>
            <td className="border border-gray-300 px-4 py-2">Chemistry Tuition</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">3</td>
            <td className="border border-gray-300 px-4 py-2">Biology Tuition</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">4</td>
            <td className="border border-gray-300 px-4 py-2">Mathematics Tuition</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">5</td>
            <td className="border border-gray-300 px-4 py-2">English Tuition</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">6</td>
            <td className="border border-gray-300 px-4 py-2">Science Tuition</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl md:text-2xl font-semibold text-center mt-8 mb-4">
        Contact Form
      </h3>

      <form className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email address</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input type="number" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="className" className="block text-gray-700 text-sm font-bold mb-2">Class Name</label>
          <input type="text" id="className" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
