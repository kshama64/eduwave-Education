import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/edu image.png'

export default function Neetphysics() {
  return (
    <div className='physicsstart'>
      <div>
        <h3 className='physics'>NEET Physics Sylabus 2024.</h3>
        </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light physicsnav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Book online Demo </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="neet">Exam Info.</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            NEET Sylabus
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="">NEET Physics Sylabus</Link></li>
            <li><a className="dropdown-item" href="neetchemistry">NEET Chemistry Sylabus</a></li>
            <li><a className="dropdown-item" href="neetbiology">NEET Biology Sylabus</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Study Material
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Important Question</a></li>
            <li><a className="dropdown-item" href="#">Revision Notes</a></li>
            <li><a className="dropdown-item" href="#">Formulas</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<h4>NTA NEET Physics Syllabus PDF Download: Chapter-wise</h4>
<p>The NEET (National Eligibility cum Entrance Test) Physics syllabus is designed to assess the understanding and application of fundamental<br></br> physics concepts that are crucial for aspiring medical students. The syllabus, prescribed by the National Testing Agency (NTA),<br></br> is aligned with the topics covered in Class 11 and Class 12 of the NCERT curriculum.The syllabus is the most significant part as it aids<br></br> all the candidates to know about the various topics/subjects on which they must work upon for the examination. Students <br></br>can also download the NEET Question Paper, NEET Sample Paper and NEET Important Questions for NEET 2024 exam preparation.</p>

      <img src={img} alt="" height='550px' width='800px' />
      <h4 className='physicsh4'>Chapters Removed in NEET Physics Sylabus 2024</h4>
      <p>The National Testing Agency (NTA) has released the NEET Physics syllabus for 2024 with <br></br>some new updates and revisions. Check the reduced Physics syllabus NEET below.</p>
      <h5>Delete Topics from NEET Physics Syllabus:</h5>
      <table className='physicstable1'>
        <thead>
            <tbody>
                <tr>
                    <th className='physicstable' colSpan='2'>Physics Class 11 Deleted Syllabus</th>
                    <th className='physicstable' colSpan='2'>Physics Class 12 Deleted Syllabus</th>
                </tr>
                <tr>
                    <th className='physicstable'>Unit </th>
                    <th className='physicstable'>Topic Removed </th>
                    <th className='physicstable'>Unit </th>
                    <th className='physicstable'>Topic Removed </th>
                </tr>
                <tr>
                    <td>Unit-1: Physical world And Measurement</td>
                    <td>
                        <ul>
                            <li>Physics</li>
                            <li>Need for measurement</li>
                        </ul>
                    </td>
                    <td> Unit-1: Electrostatics</td>
                    <td><li>vande graf generator.</li></td>
                </tr>
                <tr>
                    <td>Unit-2: Kinematics</td>
                    <td><li>ELementary concepts of differentiation and integration for describing motion.</li>
                    <li>Scalar and Vector Quantities.</li></td>
                    <td>Unit-2: Current Electricity</td>
                    <td><li>The flow of electric charges in a metallic cunductor ,carbon resistors,colour code for carbon resistors;</li></td>
                </tr>
                <tr>
                    <td>Unit-3:Laws of Motion.</td>
                    <td><li>Lubrication (Under Equilibrium of Concurrent Forced) </li></td>
                    <td>Unit-3: Magnetic effects of Current and Magnetism</td>
                    <td><li>Concept of magnetic field,Oersted's experiment.</li>
                    <li>Magnetic dipole moment of a revolving electron.</li>
                    <li>Electromagnetic and factors affecting their strength.</li>
                    <li>Parmanent magnets.</li></td>
                </tr>
                <tr>
                    <td>Unit-4:Rotational Motion </td>
                    <td><li>Momentum conversation ,and centre of mass motion.</li></td>
                    <td>Unit-4:Electromagnetic induction and Alternative Currents</td>
                    <td><li>LC oscillations ( qualitative treatment only.)</li></td>
                </tr>
                <tr>
                    <td>Unit-5:Gravitation</td>
                    <td><li>Geostationary Satellites</li></td>
                    <td>Unit-5:Optics</td>
                    <td><li>Reflection and refrection of plane wave at a plane surface using wavefronts</li>
                    <li>Scattering of light-blue colour of the sky and reddish appearance of the sun at sunrise and sunset.</li>
                    <li>Microscopes and astronomical telescopes and magnifying powers.</li></td>
                </tr>
                <tr>
                    <td>Unit-6:Oscillations and waves</td>
                    <td><li>Free forced and damped oscillations ,resonance.</li>
                    <li>Doppler effect.</li></td>
                <td>Unit-6:Electronic Devices </td>
                
                    <td><li>Energy Bands in solids and oscillator.</li></td>
                
                
                
                </tr>
            </tbody>
        </thead>
      </table>
      <h2 className='physicsh4'>New Chapter Added in NEET Physics Syllabus.</h2>
     <h5> NEET 2024 Physics syllabus has also included some new chapters or topics in each subject. <br></br>Let's check out what is been added to the NEET Physics syllabus for 2024.</h5>

     <table >
        <thead>
            <tbody>
                <tr>
                    <th className='physicstable'>Unit</th>
                    <th className='physicstable'>Topics Added</th>
                </tr>
                <tr>
                    <td>Unit-2 : Kinematics.</td>
                    <td><li>Resolution of vector</li></td>
                </tr>
                <tr>
                    <td>Unit-4 : Gravitation</td>
                    <td><li>Motion of a satellite,time period and energyof a satellite</li></td>
                </tr>
                <tr>
                    <td>Unit-7 : Properties of Bulk Matter/properties of Solid and Liquids</td>
                    <td><li>Pressure due to a fluid column;Pascal's law and its application .Effect of gravity on fluid pressure.</li></td>
                </tr>
                <tr>
                    <td>Unit-9 : Behaviour of perfect Gas Kinetic Theory</td>
                    <td><li>RMS speed of gas molecules: Degrees of freedom .</li>
                    <li>Avogadro's number.</li></td>
                </tr>
                <tr>
                    <td>Unit-3 : Magnetic Effects of Current and magnetism</td>
                    <td><li> Effect Of Temprature on magnetic properties.</li></td>
                </tr>
            </tbody>
        </thead>
     </table>
     <h4 className='physicsh4'>NEET 2024 Physics Important Chapters.</h4>
     <ul className='physicsul'>
        <li>Semiconductors.</li>
        <li>Low Of Moton.</li>
        <li>Kinematics</li>
        <li>Work,Energy,and Power </li>
        <li>Heat & Therrmodynamics</li>
        <li>Rotational Motion</li>
        <li>Modern Physics</li>
        <li>Current Electricity & Magnetism</li>
        <li>Electrostatics</li>
        <li>Oscillation and Waves</li>
        <li>Electromagnetic Induction & Alternative Currents.</li>
        <li>Optics.</li>
     </ul>
     <h4 className='physicsh4'>Why Choose EDU Wave for NEET 2024 Prepration.</h4>
     <p className='physicspara'>So that students can cover the vast syllabus in a stipulated time. And excel in the NEET exam. Vedantu also provides the <br></br>solution to the previous year question papers which will push you in obtaining a high score in the upcoming NEET exam.<br></br> You can make use of web pages that were created for NEET previous year question papers to prepare for the NEET 2024<br></br> Examination.Solving previous year question papers can help you recognise your strong and weak areas in the subject.<br></br> It gives you the feel of answering a real exam and thus helps you become ready for the upcoming NEET 2024.<br></br> You can also avail yourself of NEET Syllabus 2024 pdf download for free.</p>
     <h4 className='physicsh4'>Colclusion</h4>
     <p className='physicspara'>The Physics syllabus for NEET 2024 covers both Class 11 and Class 12 topics. It's crucial to understand key concepts from both<br></br> years, as they form the foundation for the exam. In NEET UG 2024 Physics-Class 11 syllabus, focus on topics like mechanics,<br></br> laws of motion, thermodynamics, and kinematics. These topics lay the groundwork for more advanced concepts in Class 12.<br></br>NEET UG 2024 Physics-Class 12 syllabus, delve deeper into electromagnetism, optics, modern physics, and nuclear physics.<br></br> Understanding these topics thoroughly is essential for scoring well in NEET Physics.Additionally, pay attention to numerical <br></br>problem-solving skills. NEET often tests application-based questions, so practice solving various types of problems to strengthen<br></br> your understanding. Utilize resources like Physics Syllabus NEET PDF and reference books to ensure you cover all the necessary topics. <br></br>Consistent revision and practice will be key to mastering the syllabus and performing well in the exam.

</p>


      </div>
  )
}
