import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../assets/kshama.jpg'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid nav1" >
    <Link className="navbar-brand" to="">
    <img src={logo2} alt="" width='150px' height='100px'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
      <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="study" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Courses
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/class3">Class 3th</Link></li>
            <li><Link className="dropdown-item" to="/class4">Class 4th</Link></li>
            <li><Link className="dropdown-item" to="/class5">Class 5th</Link></li>
            <li><Link className="dropdown-item" to="/class6">Class 6th</Link></li>
            <li><Link className="dropdown-item" to="/class7">Class 7th</Link></li>
            <li><Link className="dropdown-item" to="/class8">Class 8th</Link></li>
            <li><Link className="dropdown-item" to="/class9">Class 9th</Link></li>
            <li><Link className="dropdown-item" to="/class10">Class 10th</Link></li>
            <li><Link className="dropdown-item" to="/class11">Class 11th</Link></li>
            <li><Link className="dropdown-item" to="/class12">Class 12th</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="courses">Courses for Kids</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="study" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Free study material
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="ncert">NCERT Solution</Link></li>
            <li><Link className="dropdown-item" to="cbse">CBSE</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="jee">JEE Main</Link></li>
            <li><Link className="dropdown-item" to="jeeadv">JEE Advanced</Link></li>
            <li><Link className="dropdown-item" to="neet">NEET</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="online">Online Centres</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
