import React from 'react'
import { Link } from 'react-router-dom'

export default function NeetBiology() {
  return (
    <div className='biologystart'>
        <div>
        <h3 className='physics'>NEET Biology Sylabus 2024.</h3>
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
            <li><Link className="dropdown-item" to="/neetphysics">NEET Physics Sylabus</Link></li>
            <li><a className="dropdown-item" href="/neetchemistry">NEET Chemistry Sylabus</a></li>
            <li><a className="dropdown-item" href="">NEET Biology Sylabus</a></li>
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
</div>

<h4 className='biology'> NEET Biology Syllabus PDF Download: Chapter-wise</h4>
<p className='biologypara'>NEET Biology Syllabus PDF for the medical examination is available to download on EDU Wave. <br></br> Downloading the Biology Syllabus of NEET 2024 will help candidates to prepare for the exam <br></br>thoroughly & to score more marks in NEET Examination. The biology Syllabus for NEET is <br></br>the utmost important part as it helps all the candidates to know about the various topics/subjects<br></br> on which they must work upon for the examination. Click here to download the NEET Question <br></br>Paper and NEET Sample Papers with solutions for NEET 2024 exam preparation.z</p>
<img src="https://www.vedantu.com/seo/content-images/c79709a4-9feb-477b-9dc1-2f224019fb11.png" alt=""  height='500px' width='800px'/>
      
    </div>
  )
}
