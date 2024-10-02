import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import banner1 from '../assets/img1.png'
import banner12 from '../assets/img1.png'
import banner13 from '../assets/img1.png'


import { useState } from 'react';

 function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const [isSubjectDropdownOpen, setIsSubjectDropdownOpen] = useState(false);

  return (
   
    <nav className="bg-white border-b border-gray-200 shadow-md relative z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link
          className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          to="/bookonlinedemo">
          Book Online Demo
        </Link>
  
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-gray-600 focus:outline-none transition duration-300 ease-in-out">
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
  
        {/* Desktop Menu */}
        <div className={`hidden lg:flex space-x-8`}>
          {/* Tuition By Class Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center transition duration-300 ease-in-out">
              Tuition By Class
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
  
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 z-50 transition duration-300 ease-in-out">
              {[
                "NEET",
                "JEE",
                "Class 12",
                "Class 11",
                "Class 10",
                "Class 9",
                "Class 8",
                "Class 7",
                "Class 6",
                "Class 5",
                "Class 4",
                "Class 3",
              ].map((classItem) => (
                <Link
                  to={`/${classItem.toLowerCase().replace(/\s/g, "")}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 transition duration-300 ease-in-out"
                  key={classItem}
                >
                  {classItem}
                </Link>
              ))}
            </div>
          </div>
  
          {/* Tuition By Subject Dropdown */}
          <div className="relative group">
            <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center transition duration-300 ease-in-out">
              Tuition By Subject
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
  
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 z-50 transition duration-300 ease-in-out">
              {[
                "Physics",
                "Chemistry",
                "Biology",
                "Computer Science",
                "Math",
                "Science",
                "English",
                "Social Study",
                "ITI Foundation",
              ].map((subject) => (
                <Link
                  to={`/${subject.toLowerCase().replace(/\s/g, "")}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 transition duration-300 ease-in-out"
                  key={subject}
                >
                  {subject} (Class 9-12)
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden px-4 pt-4 pb-3 space-y-1">
        <div>
          <button
            onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
            className="w-full text-left text-gray-800 hover:bg-gray-100 hover:text-gray-600 px-3 py-2 rounded-md transition duration-300 ease-in-out flex justify-between items-center"
          >
            Tuition By Class
            <svg
              className={`w-5 h-5 transform transition duration-300 ${
                isClassDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isClassDropdownOpen && (
            <div className="pl-4 space-y-1">
              {["NEET", "JEE", "Class 12", "Class 11", "Class 10"].map(
                (classItem) => (
                  <Link
                    to={`/${classItem.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 transition duration-300 ease-in-out"
                    key={classItem}
                  >
                    {classItem}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
  
        <div>
          <button
            onClick={() => setIsSubjectDropdownOpen(!isSubjectDropdownOpen)}
            className="w-full text-left text-gray-800 hover:bg-gray-100 hover:text-gray-600 px-3 py-2 rounded-md transition duration-300 ease-in-out flex justify-between items-center"
          >
            Tuition By Subject
            <svg
              className={`w-5 h-5 transform transition duration-300 ${
                isSubjectDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isSubjectDropdownOpen && (
            <div className="pl-4 space-y-1">
              {["Physics", "Chemistry", "Biology"].map((subject) => (
                <Link
                  to={`/${subject.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 transition duration-300 ease-in-out"
                  key={subject}
                >
                  {subject}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    )}
  </nav>
  
  
  
  
  
  );
}
function HeroText({ title, subtitle }) {
  return (
  
  <div className="text-center py-4 px-4 md:px-8 lg:px-16">
      <h5 className="text-xl md:text-4xl  font-bold">{title}</h5>
      {/* <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">{subtitle}</h3> */}
    </div>
  );
}
function InfoSection({ title, content }) {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">{title}</h1>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center mb-8">{content}</p>
    </div>
  );
}
function DataTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-1/2 mx-auto border border-gray-300 border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left">S.No.</th>
            <th className="px-4 py-2 border border-gray-300 text-left">{data.header}</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
              <td className="px-4 py-2 border border-gray-300">{row}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}
export default function Hero() {
  const slides = [
    { id: 1, image: banner1 },
    { id: 2, image: banner12 },
    { id: 3, image: banner13},
  ];
  const classData = {
    header: 'Tuition By Boards',
    rows: ['CBSE Tuition', 'ICSE Tuition', 'NEET Tuition', 'JEE Tuition']
  };
const subjectData = {
    header: 'Subject-wise Tuition for Class 4 to 12',
    rows: ['Physics Tuition', 'Chemistry Tuition', 'Biology Tuition', 'Mathematics Tuition', 'English Tuition', 'Science Tuition']
  };
return (
    <div>
      <div>
      <div className="w-full min-h-40 mt-0 mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}>
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={`slide ${slide.id}`}
              className="w-full h-1/2 object-cover "/>
          </SwiperSlide>
        ))}
      </Swiper>
     
    </div>
      </div>
      <HeroText 
        title="Home Tuition in EDU Wave Online: Discover a Better Way of Learning" 
        subtitle="Enhance your Academic Performance with EDU Wave Online Unleashing Infinite."/>
      <Navbar />
      <div className="main">
        <InfoSection 
          title="Score High in Board Exams with Online Tuition in Your City" 
          content="Are you looking to excel in board exams and secure a bright future? Our online tuition has got you covered! Our expert tutors provide personalized lessons that cater to the specific requirements of board students, helping them achieve their goals."/>
        <DataTable data={classData} />
        <InfoSection 
          title="Master in All Subjects with Online Tuition in Your City" 
          content="Are you struggling with a subject and need expert help? Our online tuition has got you covered! Our expert tutors provide personalized lessons at affordable rates, helping you master a subject in no time."/>
        <DataTable data={subjectData}/>
      </div>
      <div class="overflow-x-auto mt-5 ">
  <table class="w-full max-w-md mx-auto border border-gray-300 border-collapse ">
    <thead class="bg-gray-200">
      <tr>
        <th class="px-4 py-2 border border-gray-300 text-left">S.No.</th>
        <th class="px-4 py-2 border border-gray-300 text-left">Subject-wise Tuition for Class 4 to 12</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 border border-gray-300">1</td>
        <td class="px-4 py-2 border border-gray-300">Physics Tuition</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="px-4 py-2 border border-gray-300">2</td>
        <td class="px-4 py-2 border border-gray-300">Chemistry Tuition</td>
      </tr>
      <tr>
        <td class="px-4 py-2 border border-gray-300">3</td>
        <td class="px-4 py-2 border border-gray-300">Biology Tuition</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="px-4 py-2 border border-gray-300">4</td>
        <td class="px-4 py-2 border border-gray-300">Mathematics Tuition</td>
      </tr>
      <tr>
        <td class="px-4 py-2 border border-gray-300">5</td>
        <td class="px-4 py-2 border border-gray-300">English Tuition</td>
      </tr>
      <tr class="bg-gray-100">
        <td class="px-4 py-2 border border-gray-300">6</td>
        <td class="px-4 py-2 border border-gray-300">Science Tuition</td>
      </tr>
    </tbody>
  </table>
</div>

{/* <div class="main5 text-center">
  <h1 class="course text-2xl font-bold mb-2">Courses</h1>
  <p class="course1 text-lg text-gray-600">(Class 4 to 12)</p>
  <div class="courseimg flex flex-wrap justify-center gap-4 mt-4">
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
    <img
      src="https://5.imimg.com/data5/SELLER/Default/2021/9/ZB/JK/WJ/137037396/whatsapp-image-2021-07-28-at-6-24-23-pm-jpeg-500x500.jpeg"
      alt=""
      class="h-24 w-24 object-cover rounded"
    />
  </div>
</div> */}

<div className="p-4">
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
    Exam Categories
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* NEET */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">Neet</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 11
            </button>
          </Link>
          <Link to='class12'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 12
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>

    {/* IIT Foundation */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">IIT Foundation</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 5 to 10
            </button>
          </Link>
          <Link to='class12'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              PCM
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>

    {/* School Preparation */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">School Preparation</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 3 to 10
            </button>
          </Link>
          <Link to='class12'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              All Subjects
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="School Preparation"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="School Preparation"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {/* All State Boards */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">All State Boards</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-48 max-w-xs">
              Hindi & English Medium
            </button>
          </Link>
          <Link to='class12'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 1 to 12
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="State Boards"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="State Boards"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>

    {/* CBSE */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">CBSE</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              ICSE
            </button>
          </Link>
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              All Subjects
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="CBSE"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="CBSE"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>

    {/* IIT JEE */}
    <div className="p-2">
      <div className="bg-red-200 p-4 rounded-md shadow-md flex flex-col items-center h-60 lg:h-72">
        <h1 className="text-center font-bold text-black-800 mb-4">IIT JEE</h1>
        <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 items-center">
          <Link to='class11'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 11
            </button>
          </Link>
          <Link to='class12'>
            <button
              type="button"
              className="rounded-full bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 h-10 w-32 max-w-xs">
              Class 12
            </button>
          </Link>
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT JEE"
            className="w-16 h-16 object-contain md:hidden"/> {/* Hide in md and larger screens */}
          <img
            src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
            alt="IIT JEE"
            className="hidden md:block w-24 h-28 object-contain"/> {/* Show in md and larger screens */}
        </div>
      </div>
    </div>
  </div>
</div>




<div className="course3 px-4 py-8">
  <div className="text-center mb-6">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">

      Book your <span className="text-primary">Free Demo</span> session
    </h1>
    <p className="text-base md:text-lg mt-2">
      Get a flavour of LIVE classes here at EDU Wave 
    </p>
    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      Book a Free Demo
    </button>
  </div>
  
</div>
<div className=" main6 px-4 py-8 ">
  <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 ">
    Reach Academic Excellence with EDU Wave 
    </h1>
</div>
<p className=" text-base md:text-lg lg:text-xl leading-relaxed mb-8 ml-9 ">
  The outcome of your academic curriculum entirely depends on the study material and the mentors you are
  <br/>
  studying with. This is why we have designed a unique domain where you can connect with the best tutors in the country.
  <br/>
  <br/>
  These tutors are chosen after proper scrutiny of their academic profiles and experience. They are then trained
  <br />
  to learn the specific teaching methodologies that lead to better results. They also learn how to use the special
  <br />
  features of our tutoring platform and include them to teach better.
  <br />
  <br />
  Our platform has exclusive augmented reality filters, drag-drop elements, animated teaching aids and other special
  <br />
  features a tutor needs to explain the topics well. It also makes the studying sessions more productive as students
  <br />
  can understand faster and retain concepts and principles well.
  <br />
  <br />
  We have pledged to make tuition more affordable in Gurgaon by providing the best tutoring sessions to meet all kinds of academic
  <br />
  needs. From selective topics to a full syllabus, you can choose anything according to your requirement and prepare for the exams.
</p>
<div className=" px-4 py-8 ">
  <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 ">
    Benefits of Online Private Tuition from EDU Wave
  </h1>
  
  <ul className=" list-disc pl-8 mb-8 space-y-4 ">
    <li className=" text-lg md:text-xl lg:text-2xl font-semibold mb-2 ">
      Topic-wise Tutorial Classes
    </li>
    <p className=" text-base md:text-lg lg:text-xl leading-relaxed mb-4 ">
      You can seek tutorial sessions on our platform based on the topics you cannot grasp. Our teachers
      <br />
      are well aware of the hurdles a student faces to understand and learn certain topics in different subjects.
      <br />
      <br />
      Based on their experience, they will make these topics easier to comprehend for you and will
      <br />
      explain them in depth. They will also cover the area where these topics are used to compile
      <br />
      accurate answers. With the tips and tricks of studying shown by the tutors, you will gain more
      <br />
      confidence and excel in your exams.
    </p>
    
    <li className=" text-lg md:text-xl lg:text-2xl font-semibold mb-2 ">
      Assessment Done Right
    </li>
    <p className=" text-base md:text-lg lg:text-xl leading-relaxed mb-4 ">
      Every student must assess his preparation level regularly. We assist students in keeping assessing
      <br />
      their performance in all the subjects in the private tuitions in Gurgaon. We have prepared quizzes,
      <br />
      and mock tests held on a regular basis right after the end of a significant part of a syllabus.
      <br />
      <br />
      It helps students to analyse their preparation level and to find out the specific areas of the syllabus
      <br />
      to focus on more. You will discover your strengths and weaknesses with our teaching methods
      <br />
      and strengthen your conceptual foundation. We ensure that academic development will be fortified with
      <br />
      our teaching and assessment methods.
    </p>
    
    <li className=" text-lg md:text-xl lg:text-2xl font-semibold mb-2 ">
      Parent-teacher Coordination
    </li>
    <p className=" text-base md:text-lg lg:text-xl leading-relaxed mb-8 ">
      We involve parents regularly and let them interact with the online tutors assigned to teach them.
      <br />
      It helps to clarify the current situation to the tutors, as well as the parents, properly. Both parties will be
      <br />
      aware of what is happening and decide what is ideal for the student.
      <br />
      <br />
      The meetings are conducted to ensure that the student is progressing on the right path. It is one of
      <br />
      the prime features of our tuitions for CBSE in Gurgaon that parents prefer.
    </p>
  </ul>
  
  <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 ">
    Book a Free Demo for Online Unleashing Infinite Tuition
  </h1>
  <p className=" text-base md:text-lg lg:text-xl leading-relaxed ">
    Now is the right time to enrol for the online classes conducted at Vedantu to stay ahead of your peers.
    <br />
    Book a free demo session by registering at our portal and understanding how the classes are conducted.
    <br />
    It will help you get an idea and decide which tuition program to go with. Avail yourself of the best resources we
    <br />
    have designed for your study and make a difference.
  </p>
</div>
<div className=" main7 px-4 py-8 ">
  <div className=" FAQ max-w-3xl mx-auto ">
    <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 ">
      FAQs on EDU Wave Online Tuition
    </h1>
    
    <details className=" mb-4 ">
      <summary className=" text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer focus:outline-none ">
        Is online tuition the right resource to choose?
      </summary>
      <p className=" text-base md:text-lg lg:text-xl leading-relaxed mt-2 ">
        Online tuition conducted on a technologically-advanced platform is always a great option. You will understand the topics well due to the use of animated teaching aids explained by the top tutors.
      </p>
    </details>
    
    <details className=" mb-4 ">
      <summary className=" text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer focus:outline-none ">
        How can online home tuition help me achieve good marks?
      </summary>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-2">
        The proper explanation of topics, regular tests, and doubt clarification will help you become more confident and score more in the exams.
      </p>
    </details>
    
    <details className="mb-4">
      <summary className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer focus:outline-none">
        Will a tutor help me plan my study sessions?
      </summary>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-2">
        Planning your study sessions is the first step to success. It is hard to tackle the entire syllabus of multiple subjects without a plan . This is why our tutors will prepare a study plan or follow the one you are comfortable with.It enables a planned approach to complete a syllabus step by step.
      </p>
    </details>
    <details className="mb-4">
      <summary className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer focus:outline-none">
        What if I have questions to ask the online tutor?
      </summary>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-2">
        All the CBSE tuition classes in Gurgaon will have doubt clearance sessions at the end. Such dedicated sessions will be given to resolve your doubts.
      </p>
    </details>
    <details className="mb-4">
      <summary className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer focus:outline-none">
        Will all the subjects be covered by online tuition?
      </summary>
      <p className="text-base md:text-lg lg:text-xl leading-relaxed mt-2">
        All the subjects are covered in the online tuition sessions if you choose a full syllabus course.
      </p>
    </details>
  </div>
</div>
</div>

 );
}
