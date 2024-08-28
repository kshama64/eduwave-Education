import React from 'react'

export default function CBSE() {
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>CBSE Board Examination 2024</h1>
      <img 
        src="https://www.vedantu.com/seo/content-images/f02ffab0-f7a7-47ac-b5db-f21157bccab6_SEO_DWeb_895x110_%284%29.png" 
        alt="CBSE Board" 
        className='w-full max-w-lg mx-auto mb-6'/>
        
        
        
        <h2 className='text-2xl font-semibold text-center mb-4'>Central Board of Secondary Education (CBSE) 2024 Class 1 to 12 Exam Updates</h2>
      <p className='text-gray-700 text-justify leading-relaxed mb-6'>
        The Central Board of Secondary Education (CBSE) is one of India's most prominent educational boards, known for its comprehensive curriculum and standardized exams. CBSE focuses on providing a balanced education that encourages both academic excellence and the holistic development of students. The board's curriculum emphasizes core subjects like mathematics, science, and languages, while also integrating co-curricular activities to foster creativity, critical thinking, and problem-solving skills. CBSE schools are widespread across India and abroad, offering a unified educational experience that adheres to the national educational standards. The board regularly updates its syllabus to keep pace with educational advancements and to equip students with the skills needed in a rapidly changing world.
      </p>

      <h1 className='text-2xl font-semibold text-center mb-4'>CBSE Board Exam 2024 Dates</h1>
      <p className='text-gray-700 text-justify leading-relaxed mb-6'>
        CBSE (Central Board of Secondary Education) has released the exam dates for the academic year 2023-2024. The CBSE Class 10th and 12th Examination is set to commence in February 2024. The examinations are expected to be conducted within a span of 55 days. The board aims to conduct the exams smoothly and fairly, ensuring a conducive environment for all students to perform at their best.
      </p>

      <table className='min-w-full table-auto mb-6'>
        <thead>
          <tr>
            <th className='px-4 py-2 border text-left text-sm font-medium text-gray-600'>S.No.</th>
            <th className='px-4 py-2 border text-left text-sm font-medium text-gray-600'>Class</th>
            <th className='px-4 py-2 border text-left text-sm font-medium text-gray-600'>Exam Dates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>1</td>
            <td className='px-4 py-2 border text-gray-700'>Class 10</td>
            <td className='px-4 py-2 border text-gray-700'>15 Feb to 25 Feb 2025</td>
          </tr>
          <tr>
            <td className='px-4 py-2 border text-gray-700'>2</td>
            <td className='px-4 py-2 border text-gray-700'>Class 12</td>
            <td className='px-4 py-2 border text-gray-700'>20 Feb to 30 Feb 2025</td>
          </tr>
        </tbody>
      </table>

      <h2 className='text-2xl font-semibold text-center mb-4'>Unleashing Brilliance: Vedantu's Phenomenal Success Story of CBSE Class 10 Board Exams!</h2>
      <p className='text-gray-700 text-justify leading-relaxed mb-6'>
        Unlock your potential and witness extraordinary achievements with Vedantu's unbeatable approach to CBSE Class 10 success! Our unparalleled online classes for Class 10 Board empower students with expert faculty, interactive sessions, and rigorous practice to strengthen their concepts and excel in exams. With personalized attention and cutting-edge technology, we offer a seamless learning experience from the comfort of your home. Join the league of our triumphant achievers who are the toppers in class and paved their way to dream colleges. Dream big, work hard, and watch your aspirations become a reality with Vedantu's unwavering support. Get ready to soar to new heights of success in the CBSE Class 10 board examination!
      </p>

      <h1 className='text-2xl font-semibold text-center mb-4'>Central Board Of Secondary Education</h1>
      <p className='text-gray-700 text-justify leading-relaxed mb-6'>
        CBSE conducts its final board exam for both class 10th and 12th examinations. The Board prepares its students throughout the year with different sets of examinations that are conducted by the respective schools which also include the 10th and 12th pre-board examination or the model exams. The Private or Public schools that are affiliated with the CBSE board follow the NCERT curriculum. Students must start preparing from 6th grade as it lays down the foundation for most concepts that will be studied in detail in further grades. CBSE works with the vision of providing “Committed To Equity And Excellence In Education.” The board has two official languages namely English and Hindi. Founded on November 3, 1962, CBSE is headed by the chairperson Mr. Manoj Ahuja. The headquarters of CBSE is situated in Delhi. For more information about the CBSE and the latest updates, students can refer to the official CBSE Website. Mentioned below is all the important information that you need to know about CBSE.
      </p>

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
