import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/img1.png'

export default function JEEAdvanced() {
  return (
    <div className='p-4'>
       <h3 className='text-2xl font-bold text-center mb-6'>JEE Advanced 2024: Registration Started, Exam Dates (Out), Syllabus, & Eligibility Criteria</h3>
       <img src={img} alt="" className='w-full h-auto mb-6' />
       <h3 className='text-2xl font-bold text-center mb-6'>JEE Advanced 2024: Registration Started, Exam Dates (Out), Syllabus, & Eligibility Criteria</h3>
       <p className='mb-6 text-lg'>
         Candidates must have secured a rank among the top 2.5 lakh rank holders in the JEE Main exam to be eligible for JEE Advanced 2024. <br />
         The exam will be held in two papers, each of three hours duration. Paper 1 and Paper 2 both will cover Physics, Chemistry, and Mathematics.<br />
         The syllabus for JEE Advanced 2024 is based on the Class 11 and Class 12 syllabus of the Central Board of Secondary Education <br />
         (CBSE) and other equivalent boards. The exam pattern is designed to test the candidate's understanding of fundamental <br />
         concepts and their ability to apply them to solve problems.
       </p>
       
       <h3 className='text-xl font-semibold mb-4'>JEE Advanced 2024 Latest News and Updates</h3>
       <ul className='list-disc list-inside mb-6'>
         <li>Registration Dates: Registration will open on April 21, 2024, and close on April 30, 2024.</li>
         <li>Exam Date: The exam is scheduled for May 26, 2024.</li>
         <li>Eligibility: Candidates need to rank among the top 2,50,000 in JEE Main 2024 and have completed Class 12th in 2023 or 2024.</li>
         <li>Syllabus: The exam will cover Physics, Chemistry, and Mathematics across two papers.</li>
       </ul>
       
       <h3 className='text-xl font-semibold mb-4'>What is JEE Advanced?</h3>
       <p className='mb-6 text-lg'>
         JEE Advanced is the next step after JEE Main for those aiming to get into IITs. Only the top 2.5 lakh <br />
         students from JEE Main can take it. It's basically your ticket into IITs. The exam happens once a year <br />
         and is managed by one of 7 IITs or IISc Bangalore. It's all online, thanks to the Joint Admission Board (JAB).
       </p>
       
       <h3 className='text-xl font-semibold mb-4'>What's in it for You?</h3>
       <ul className='list-disc list-inside mb-6'>
         <li>You can get into various undergraduate courses like B.Tech, B.Sc, and B.Arch.</li>
         <li>You can also join Integrated Master's and Dual Degree programs.</li>
         <li>Your seat is chosen through JoSAA, depending on your JEE Advanced rank and what you prefer.</li>
       </ul>
       
       <h3 className='text-xl font-semibold mb-4'>What Can You Study?</h3>
       <ul className='list-disc list-inside mb-6'>
         <li>You can go for BTech in different Engineering fields.</li>
         <li>There are BSc programs in Science.</li>
         <li>You could study BArch in Architecture.</li>
         <li>Or you can try Dual Degree programs like B.Tech-MTech and BS-MS.</li>
         <li>There are also Integrated MTech and Integrated MSc programs.</li>
       </ul>
       
       <h2 className='text-xl font-semibold mb-4'>JEE Advanced 2024 Highlights</h2>
       <p className='mb-6 text-lg'>You can find a summary of the key points of JEE Advanced 2024 below. This will provide you with a brief overview of the examination.</p>
       
       <div className='overflow-x-auto'>
         <table className='w-full text-left border border-gray-300'>
           <thead className='bg-gray-100'>
             <tr>
               <th className='px-4 py-2 border-b border-gray-300'>Exam Particulars</th>
               <th className='px-4 py-2 border-b border-gray-300'>Exam Details</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Exam Name</td>
               <td className='px-4 py-2 border-b border-gray-300'>Joint Entrance Exam Advanced 2024</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Conducting Body</td>
               <td className='px-4 py-2 border-b border-gray-300'>IIT</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Exam Level</td>
               <td className='px-4 py-2 border-b border-gray-300'>National</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Exam Frequency</td>
               <td className='px-4 py-2 border-b border-gray-300'>Once a year</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Mode of Exam</td>
               <td className='px-4 py-2 border-b border-gray-300'>Computer Based Test</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Number Of Candidates Registered</td>
               <td className='px-4 py-2 border-b border-gray-300'>1.95 Lakh</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Number Of Candidates Appeared</td>
               <td className='px-4 py-2 border-b border-gray-300'>1,80,372</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Number Of Candidates Passed</td>
               <td className='px-4 py-2 border-b border-gray-300'>43,773</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Total seats in IITs</td>
               <td className='px-4 py-2 border-b border-gray-300'>17,385</td>
             </tr>
             <tr>
               <td className='px-4 py-2 border-b border-gray-300'>Official Website</td>
               <td className='px-4 py-2 border-b border-gray-300'><Link to="https://jeeadv.ac.in" className="text-blue-500 hover:underline">jeeadv.ac.in</Link></td>
             </tr>
           </tbody>
         </table>
       </div>
       
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
