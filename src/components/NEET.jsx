import React from 'react';
import { Link } from 'react-router-dom';

export default function NEET() {
  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4">
        NEET 2024: Result - June 14, Counselling Process, Seat Allotment and Answer Key
      </h1>
      <img
        src="https://vmkt.vedantu.com/vmkt/PROD/png/150a1a3a-2755-4315-b7dd-deee81076697-1704967661267-4001376723323670.png"
        alt="NEET Banner"
        className="w-full h-auto mb-4"
      />

      <nav className="bg-white shadow-md mb-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <Link className="text-lg font-semibold text-gray-800" to="#">
              Book Online Demo
            </Link>
            <button className="text-gray-800 lg:hidden" type="button" aria-label="Toggle navigation">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <ul className="flex space-x-4">
                <li className="relative group">
                  <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center">
                    Tuition By Class
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="#">NEET</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/jee">JEE</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class12">Class 12 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class11">Class 11 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class10">Class 10 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class9">Class 9 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class8">Class 8 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class7">Class 7 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class6">Class 6 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class5">Class 5 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class4">Class 4 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class3">Class 3 Tuition</Link></li>
                    {/* Add more links as needed */}
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
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/physics">Physics</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/chemistry">Chemistry</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/biology">Biology</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/cm">Computer Science</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/math">Maths</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/science">Science</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/english">English</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/socialstudy">Social Study</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/iti">ITI Foundation</Link></li>
                    {/* Add more links as needed */}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
  NEET UG 2024: What's New and Exciting Updates!
</h2>

<p className="text-gray-700 mb-4">
  The National Testing Agency (NTA) has confirmed that the NEET 2024 exam will be held on May 5th.<br /> 
  The NTA will create the NEET 2024 exam paper based on topics from the Physics, Chemistry, and Biology syllabi for classes 11 and 12 textbooks. The exam will be conducted in 13 languages.
</p>

<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
  Students Can Expect the Following Changes in the NEET 2024 Exam:
</h2>

<ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
  <li>It is not mandatory for candidates to show their Aadhar card to fill out the NEET 2024 application form. However, keeping a valid ID proof handy is necessary.</li>
  <li>Students will be able to appear for the NEET 2024 Exam in any of the two languages they prefer in addition to the standard English language.</li>
  <li>There are no restrictions on the number of attempts a student can take in NEET 2024.</li>
  <li>State Open Schools, NIOS, or private candidates cannot appear in the NEET 2024 Exam.</li>
  <li>The NMC has increased the number of single-choice questions in the NEET 2024 Exam. This is to reduce the chances of guessing and to make the Exam more challenging.</li>
  <li>It is now mandatory for all students who want to pursue medicine abroad and are Indian citizens to qualify for the NEET UG 2024 Exam.</li>
  <li>Telangana and Andhra Pradesh are now a part of the 15% All India Quota scheme.</li>
  <li>The NMC has also introduced a new section on ethics, integrity, and aptitude in medical practice in the NEET 2024 Exam. This section will test candidates' understanding of medical ethics, communication skills, and professional conduct.</li>
</ul>

      <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-200 mb-4 ">
    <thead >
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal font">
        <th className="py-3 px-6 text-left">Detail</th>
        <th className="py-3 px-6 text-left">Information</th>
      </tr>
    </thead>
    <tbody className="text-gray-700 text-sm  font-semibold">
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Name of the Exam:</td>
        <td className="py-3 px-6 text-left">NEET (National Eligibility cum entrance Test)</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Mode:</td>
        <td className="py-3 px-6 text-left">Pen and Paper Based</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Duration:</td>
        <td className="py-3 px-6 text-left">3 hours and 20 minutes<br />2 pm to 5:20 PM</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Courses:</td>
        <td className="py-3 px-6 text-left">MBBS, BDS, AYUSH, Veterinary, etc.</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Exam Fees:</td>
        <td className="py-3 px-6 text-left">INR 1,700 (General), 1,600 (OBC), 1,000 (Reserved category candidates), 9,500 (Foreign nationals)</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Languages:</td>
        <td className="py-3 px-6 text-left">Hindi, English</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Subjects:</td>
        <td className="py-3 px-6 text-left">Physics, Chemistry, Biology (Botany and Zoology)</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Total Number of Questions:</td>
        <td className="py-3 px-6 text-left">200 (to attempt-180)</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Total Marks:</td>
        <td className="py-3 px-6 text-left">720</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Types of Questions:</td>
        <td className="py-3 px-6 text-left">MCQ containing 4 options with 1 correct answer</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Accepting Colleges:</td>
        <td className="py-3 px-6 text-left">1,613</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">NEET Helpline Number:</td>
        <td className="py-3 px-6 text-left">011-69227700, 011-40759000<br />Email: neet@nta.ac.in, neet1@nta.ac.in</td>
      </tr>
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left font-semibold">Official Website:</td>
        <td className="py-3 px-6 text-left">NEET.nta.nic.in</td>
      </tr>
    </tbody>
  </table>
</div>


      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">NEET 2024 Address Proof</h2>
      <p className="text-gray-700 mb-4">
        During the NEET 2024 online application process, candidates must upload address proof, including their present and permanent address. The address proof serves as a verification of the candidate's residential details. It ensures that the information provided by the candidate is accurate and helps maintain the authenticity of the application. Candidates must upload valid documents that clearly indicate their current and permanent address, such as an Aadhaar card, passport, driving license, or any other government-issued identification with the address mentioned. It is crucial to upload the address proof accurately and ensure that the provided information aligns with the candidate's residential details to avoid any discrepancies during the application evaluation process.
      </p>
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Here are the Key Details Regarding the Address Proof for NEET in the Application Form:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>The address proof documents accepted can be AADHAAR Card, Domicile Certificate, Passport, Voter ID card, etc.</li>
        <li>Both the proof of Permanent and Present address should be combined and uploaded as a single PDF file</li>
        <li>If the candidate's Present and Permanent addresses are the same, a single document will be sufficient</li>
        <li>In the case of candidates residing in rented accommodations, they can upload the rent agreement as proof of their present address.</li>
      </ul>

      <form className="space-y-4 max-w-md mx-auto p-4">
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
    <input
      type="email"
      id="email"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
    <input
      type="number"
      id="phone"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      required
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
    <textarea
      id="message"
      rows="4"
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
  <button
    type="submit"
    className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    Submit
  </button>
</form>

    </div>
  );
}
