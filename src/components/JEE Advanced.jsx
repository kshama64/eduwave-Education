import React from 'react'
import { Link } from 'react-router-dom'

export default function JEEAdvanced() {
  return (
    <div className='advancejee'>
       <h3 className='jeeh1'>JEE Advanced 2024: Registration Started , Exam Dates (Out), Syllabus, & Eligibility Criteria</h3>
       <img src="https://www.vedantu.com/seo/content-images/f02ffab0-f7a7-47ac-b5db-f21157bccab6_SEO_DWeb_895x110_%284%29.png" alt="" className='jeeimg' />
       <h3 className='jeeh1'>JEE Advanced 2024: Registration Started , Exam Dates (Out), Syllabus, & Eligibility Criteria</h3>
       <p className='advancedjee'>Candidates must have secured a rank among the top 2.5 lakh rank holders in the JEE Main exam to be eligible for JEE Advanced 2024. <br></br>The exam will be held in two papers, each of three hours duration. Paper 1 and Paper 2 both will cover Physics, Chemistry and Mathematics.<br></br> The syllabus for JEE Advanced 2024 is based on the Class 11 and Class 12 syllabus of the Central Board of Secondary Education <br></br>(CBSE) and other equivalent boards. The exam pattern is designed to test the candidate's understanding of fundamental <br></br>concepts and their ability to apply them to solve problems.</p>
       <h3 className='jeeh2'>JEE Advanced 2024 Latest News and update</h3>
       <ul className='jeeul'>
        <li>Registration Dates: Registration will open on April 21, 2024, and close on April 30, 2024.</li>
<li>Exam Date : The exam is scheduled for May 26, 2024.</li>
<li>Eligibility : Candidates need to rank among the top 2,50,000 in JEE Main 2024 and have completed Class 12th in 2023 or 2024.</li>
<li>Syllabus : The exam will cover Physics, Chemistry, and Mathematics across two papers.</li>
       </ul>
       <h3 className='jeeh2'>What is JEE Advanced ?</h3>
       <p className='advancedjee'>JEE Advanced is the next step after JEE Main for those aiming to get into IITs. Only the top 2.5 lakh<br></br> students from JEE Main can take it. It's basically your ticket into IITs. The exam happens once a year<br></br> and is managed by one of 7 IITs or IISc Bangalore. It's all online, thanks to the Joint Admission Board (JAB).</p>
       <h3 className='jeeh2'>What's in it for You?</h3>
       <ul className='jeeul'>
        <li>You can get into various undergraduate courses like B.Tech, B.Sc, and B.Arch.</li>
        <li>You can also join Integrated Master's and Dual Degree programs.</li>
        <li>Your seat is chosen through JoSAA, depending on your JEE Advanced rank and what you prefer.

</li>
       </ul>
       <h3 className='jeeh2'>What Can You Study ?</h3>
       <ul className='jeeul'>
        <li>You can go for BTech in different Engineering fields.</li>
        <li>There are BSc programs in Science.</li>
        <li>You could study BArch in Architecture.</li>
        <li>Or you can try Dual Degree programs like B.Tech-MTech and BS-MS.</li>
        <li>There are also Integrated MTech and Integrated MSc programs.</li>
       </ul>
       <h2 className='jeeh2'>JEE Advanced 2024 Highlights</h2>
       <p className='advancedjee'>You can find a summary of the key points of JEE Advanced 2024 below. This will provide you with a brief overview of the examination.</p>
       <table className='jeetable'>
        <thead>
            <tbody>
                <tr>
                    <th className='jeeth1'>Exam Particulars</th>
                    <th className='jeeth1'>Exam Details</th>
                </tr>
                <tr>
                    <td>Exam Name</td>
                <td>Joint Entrance Exam Advanced 2024</td>
                </tr>
                <tr>
                    <td>Conducting Body</td>
                    <td>IIT </td>
                </tr>
                <tr>
                    <td>Exam Level</td>
                    <td>National</td>
                </tr>
                <tr>
                    <td>Exam Frequency</td>
                    <td>Once a year </td>
                </tr>
                <tr>
                    <td>Mode of Exam</td>
                    <td>Computer Based Test</td>
                </tr>
                <tr>
                <td>Number Of Candidates registered </td>
                <td>1.95 Lakh</td>
                </tr>
                <tr>
                    <td>Number Of Candidates appeared</td>
                    <td>1,80,372</td>
                </tr>
                <tr>
                    <td>Number Of Candidates Passed</td>
                    <td>43,773</td>
                </tr>
                <tr>
                    <td>Total seats in IITs</td>
                    <td>17,385</td>
                </tr>
                <tr>
                    <td>Official website</td>
                    <td>jeeadv.ac.in</td>
                </tr>
            </tbody>
        </thead>
       </table>
       <form className='class12form'>
  <div class="mb-3 " >
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div class="mb-3 " >
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
      </div>
  <div class="mb-3 " >
    <label for="exampleInputEmail1" class="form-label">Message</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <button type="submit" class="btn btn-success d-grid gap-2 col-6 mx-auto" >Submit</button>
</form>
    </div>
  )
}