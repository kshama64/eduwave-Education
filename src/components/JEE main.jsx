// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function JEEmain() {
//   return (
//     <div className='jeestart'>
//       <h3 className='jeeh1'>JEE Main 2024: Exam dates, April Question Paper with Solutions PDF</h3>
//       <img src="https://www.vedantu.com/seo/content-images/f02ffab0-f7a7-47ac-b5db-f21157bccab6_SEO_DWeb_895x110_%284%29.png" alt="" className='jeeimg' />

//       <nav className="bg-white shadow-lg">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <Link className="text-xl font-semibold text-gray-800" to="#">
//               Book Online Demo
//             </Link>
//             <div className="lg:hidden">
//               <button className="text-gray-800 focus:outline-none" type="button">
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="hidden lg:flex lg:items-center">
//               <ul className="flex space-x-8">
//                 <li className="relative group">
//                   <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center">
//                     Tuition By Class
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                   </button>
//                   <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/neet">NEET</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/jee">JEE</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="#">Class 12 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class11">Class 11 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class10">Class 10 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class9">Class 9 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class8">Class 8 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class7">Class 7 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class6">Class 6 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class5">Class 5 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class4">Class 4 Tuition</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class3">Class 3 Tuition</Link></li>
//                   </ul>
//                 </li>
//                 <li className="relative group">
//                   <button className="text-gray-800 hover:text-gray-600 font-semibold flex items-center">
//                     Tuition By Subject
//                     <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                   </button>
//                   <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
//                     <li><Link className="block px-7 py-2 text-gray-800 hover:bg-gray-100" to="/physics">Physics</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/chemistry">Chemistry</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/biology">Biology</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/cm">Computer Science</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/math">Maths</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/science">Science</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/english">English</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/socialstudy">Social Study (All Subjects)</Link></li>
//                     <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/iti">ITI Foundation (All)</Link></li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
// <h2 className='jeeh2'>JEE Main 2024: What are the Important Updates of Session 2 ?</h2>
//       <p className='jeepara'> The syllabus has been reduced for 2024, with some chapters removed from subjects like Physics, Chemistry, and Mathematics. <br></br>For instance, topics like geostationary satellites in Physics and the entire chapter on "States of Matter" in Chemistry have been<br></br> eliminated.The Joint Entrance Examination (JEE) Main is a national-level exam in India, primarily for students seeking admission<br></br> to undergraduate engineering programs (B.Tech/B.E.) at National Institutes of Technology (NITs), Indian Institutes of <br></br>Information Technology (IIITs), and other Centrally Funded Technical Institutions (CFTIs). It also serves as a qualifying<br></br> exam for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs).</p>
//       <h1 className='jeeh2'>JEE Main 2024 Eligibility Criteria</h1>
//       <p className='jeepara'>Here, aspirants will find complete details on JEE Main 2024 eligibility criteria. Aspirants planning to preparefor JEE Main 2024 <br></br>exam should go through the eligibility details to ensure they meet all the requirements below applying for the exam.</p>
//       <table className='jeetable'>
//         <thead>
//             <tbody>
//                 <tr>
//                     <th className='jeeth'>Eligibility Criteria for JEE Main 2024</th>
//                     <th className='jeeth'>Details</th>
//                 </tr>
//                 <tr>
//                     <td>Age Limit</td>
//                     <td>	
//                     Candidates who have passed the class 12 or equivalent Mexamination in 2022, 2023, or are appearing in 2024, can participate in the examination, irrespective of their age.</td>
//                 </tr>
//                 <tr>
//                     <td>Qualifying Examination</td>
//                     <td>Candidates must have passed the 10+2 examination from any recognized Central/State Board. Recognized boards include Central Board of Secondary Education, New Delhi; Council for the Indian School Certificate Examinations, New Delhi; among others.</td>
//                 </tr>
//                 <tr>
//                     <td>National Institute of open Schooling</td>
//                     <td>To be eligible, candidates must qualify the senior secondary examination conducted by the National Institute of Open Schooling (NIOS) with the best five subjects, including Physics, Chemistry, and Mathematics. Students who have studied fewer than five subjects in their qualifying exam are not eligible for JEE Main 2024.</td>
//                 </tr>
//                 <tr>
//                     <td>Eligibility for B.E./B.Tech Programs</td>
//                     <td>For admission to B.E./ B.Tech programs, candidates must have cleared the senior secondary examination with subjects including Physics, Mathematics, Chemistry / Biology / Biotechnology / Technical Vocational Subject, and any other subject.</td>
//                 </tr>
//             </tbody>
//         </thead>
//       </table>
//       <p className='jeepara'> Candidates who have completed the Class 12 (or equivalent) examination outside India or have not cleared the Class 12 <br></br> (or equivalent) examination from any recognised Central/State Board of India should produce a certificate from the<br></br> Association of Indian Universities (AIU) to the effect that the examination they have passed is equivalent to the Class 12 Examination.</p>
//       <h2 className='jeeh2'>JEE Main 2024 Syllabus</h2>
//       <p className='jeepara'>The JEE Main 2024 Syllabus spans physics, chemistry, and mathematics, encompassing every critical concept and subject area. <br></br>This extensive coverage ensures that you have a well-rounded understanding of the subjects, giving you a competitive edge.</p>
//       <form className='class12form'>
//   <div class="mb-3 " >
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div class="mb-3 " >
//     <label for="exampleInputEmail1" class="form-label">Phone Number</label>
//     <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//       </div>
//   <div class="mb-3 " >
//     <label for="exampleInputEmail1" class="form-label">message</label>
//     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//       </div>
  
//   <button type="submit" class="btn btn-success d-grid gap-2 col-6 mx-auto" >Submit</button>
// </form>
//     </div>
//   )
// }





import React from 'react'
import { Link } from 'react-router-dom'

export default function JEEmain() {
  return (
    <div className='jeestart p-4'>
      <h3 className='text-2xl font-bold text-center mb-6'>JEE Main 2024: Exam dates, April Question Paper with Solutions PDF</h3>
      <img src="https://www.vedantu.com/seo/content-images/f02ffab0-f7a7-47ac-b5db-f21157bccab6_SEO_DWeb_895x110_%284%29.png" alt="" className='w-full h-auto mb-6' />

      <nav className="bg-white shadow-lg mb-6">
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
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="#">Class 12 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class11">Class 11 Tuition</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-800 hover:bg-gray-100" to="/class10">Class 10 Tuition</Link></li>
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
      
      <h2 className='text-xl font-semibold mb-4'>JEE Main 2024: What are the Important Updates of Session 2?</h2>
      <p className='mb-6'>The syllabus has been reduced for 2024, with some chapters removed from subjects like Physics, Chemistry, and Mathematics. <br />For instance, topics like geostationary satellites in Physics and the entire chapter on "States of Matter" in Chemistry have been eliminated. The Joint Entrance Examination (JEE) Main is a national-level exam in India, primarily for students seeking admission to undergraduate engineering programs (B.Tech/B.E.) at National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs), and other Centrally Funded Technical Institutions (CFTIs). It also serves as a qualifying exam for JEE Advanced, which is required for admission to the Indian Institutes of Technology (IITs).</p>
      
      <h1 className='text-xl font-semibold mb-4'>JEE Main 2024 Eligibility Criteria</h1>
      <p className='mb-6'>Here, aspirants will find complete details on JEE Main 2024 eligibility criteria. Aspirants planning to prepare for JEE Main 2024 exam should go through the eligibility details to ensure they meet all the requirements below before applying for the exam.</p>
      
      <div className="overflow-x-auto">
        <table className='w-full text-center border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 border-b border-gray-300'>Eligibility Criteria for JEE Main 2024</th>
              <th className='px-4 py-2 border-b border-gray-300'>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 py-2 border-b border-gray-300'>Age Limit</td>
              <td className='px-4 py-2 border-b border-gray-300'>Candidates who have passed the class 12 or equivalent examination in 2022, 2023, or are appearing in 2024, can participate in the examination, irrespective of their age.</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border-b border-gray-300'>Qualifying Examination</td>
              <td className='px-4 py-2 border-b border-gray-300'>Candidates must have passed the 10+2 examination from any recognized Central/State Board. Recognized boards include Central Board of Secondary Education, New Delhi; Council for the Indian School Certificate Examinations, New Delhi; among others.</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border-b border-gray-300'>National Institute of Open Schooling</td>
              <td className='px-4 py-2 border-b border-gray-300'>To be eligible, candidates must qualify the senior secondary examination conducted by the National Institute of Open Schooling (NIOS) with the best five subjects, including Physics, Chemistry, and Mathematics. Students who have studied fewer than five subjects in their qualifying exam are not eligible for JEE Main 2024.</td>
            </tr>
            <tr>
              <td className='px-4 py-2 border-b border-gray-300'>Eligibility for B.E./B.Tech Programs</td>
              <td className='px-4 py-2 border-b border-gray-300'>For admission to B.E./ B.Tech programs, candidates must have cleared the senior secondary examination with subjects including Physics, Mathematics, Chemistry / Biology / Biotechnology / Technical Vocational Subject, and any other subject.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p className='mt-6 mb-6'>Candidates who have completed the Class 12 (or equivalent) examination outside India or have not cleared the Class 12 (or equivalent) examination from any recognized Central/State Board of India should produce a certificate from the Association of Indian Universities (AIU) to the effect that the examination they have passed is equivalent to the Class 12 Examination.</p>
      
      <h2 className='text-xl font-semibold mb-4'>JEE Main 2024 Syllabus</h2>
      <p className='mb-6'>The JEE Main 2024 Syllabus spans physics, chemistry, and mathematics, encompassing every critical concept and subject area. This extensive coverage ensures that you have a well-rounded understanding of the subjects, giving you a competitive edge.</p>
      
      <form className='max-w-lg mx-auto'>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
          <input 
            type="email" 
            id="email" 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
            required
          />
        </div>
        <div className='mb-4'>
          
          <label htmlFor="phone" className='block text-sm font-medium text-gray-700'>Phone Number</label>
          <input 
            type="number" 
            id="phone" 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
          <input 
            type="text" 
            id="message" 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
          />
        </div>
        <button type="submit" className='w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600'>
          Submit
        </button>
      </form>
    </div>
  )
}






