import React from 'react'
import img from '../assets/img3.png'

export default function NCERTsolution() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>NCERT Solution 2024-2025</h1>
      <img 
        src={img} 
        alt="NCERT Solutions" 
        className="w-full h-auto mb-6 max-w-screen-2xl"/>
      <h3 className='text-xl font-semibold text-center mb-4'>NCERT Solutions for Class 1 to 12 - CBSE Free PDF Download</h3>
      <p className='text-gray-700 text-justify leading-relaxed mb-6'>
        Are you looking for NCERT Solutions for Class 1 to Class 12? If yes, then we have got you all covered.<br />
        Vedantu’s NCERT solutions is a complete guide for anyone looking to strengthen their knowledge of any topic, 
        concept, subject , or even if they want to go back and use the study material as a reference. The NCERT solutions
        provided in the PDF format are created keeping in mind the CBSE exam pattern to help you score better.
      </p>
      <h2 className='text-2xl font-semibold text-center mb-4'>Detailed Overview of NCERT Solutions</h2>
      
      <table className='min-w-full table-auto mb-6'>
        <thead>
          <tr>
            <th className='px-4 py-2 border text-center text-sm font-medium text-black-600'>Category</th>
            <th className='px-4 py-2 border text-center text-sm font-medium text-black-600'>Content Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Content Type:</td>
            <td className='px-4 py-2 border text-gray-700'>Text, Images, Videos, and PDF</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Classes:</td>
            <td className='px-4 py-2 border text-gray-700'>Class 1 to 12</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Academic Session:</td>
            <td className='px-4 py-2 border text-gray-700'>2024-2025</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Medium Used:</td>
            <td className='px-4 py-2 border text-gray-700'>Hindi And English Medium</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Subjects:</td>
            <td className='px-4 py-2 border text-gray-700'>Physics, Chemistry, Biology, Maths, Science, English, Hindi, Social, etc.</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>Available Material:</td>
            <td className='px-4 py-2 border text-gray-700'>Chapter Wise Solutions</td>
          </tr>
        </tbody>
      </table>

      <h2 className='text-xl font-bold text-center mb-4'>NCERT Solution For Classes 4 to 12</h2>
      <table className='min-w-full table-auto mb-6'>
        <tbody>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 4</td>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 5</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 6</td>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 7</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 8</td>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 9</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 10</td>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 11</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 12</td>
            <td className='px-4 py-2 border text-gray-700'>NCERT Solution for Class 12</td>
          </tr>
        </tbody>
      </table>
      <h1 className='text-3xl font-bold text-center mb-6'>Contact us</h1>


      <form className='max-w-lg mx-auto'>
        <div className='mb-4'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email address</label>
          <input 
            type="email" 
            id="email" 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
            required/>
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
