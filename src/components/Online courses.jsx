import React from 'react'

export default function Onlincourses() {
  return (
   <div>
   <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-red-950 ">
  Coming Soon
</h1>
<div class="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
  <h1 class="text-3xl font-bold mb-4 text-center">Our courses</h1>
  <ul class="list-disc pl-5 space-y-2">
    <li class="text-lg">NCERT</li>
    <li class="text-lg">ITI Foundation</li>
    <li class="text-lg">JEE Mains</li>
    <li class="text-lg">JEE Advanced</li>
    <li class="text-lg">NEET</li>
    <li class="text-lg">School Prepration</li>
  </ul>
</div>


<h1 class="text-4xl text-center mt-20 font-bold text-gray-800">
  Contact Us
</h1>

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
  )
}
