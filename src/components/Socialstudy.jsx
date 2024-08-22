import React from 'react'
import { Link } from 'react-router-dom'

export default function Socialstudy() {
  return (
    <div className='physics1'>
    <h3>Enrol in Social Study Online Tuition From EDU Wave.</h3>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<a className="navbar-brand" href="#">Book online Demo </a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNavDropdown">
 <ul className="navbar-nav">
 
   <li className="nav-item dropdown">
     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Tuition By Class
     </a>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
     <li><Link className="dropdown-item" to="/neet">NEET</Link></li>
     <li><Link className="dropdown-item" to="/jee">JEE</Link></li>
     <li><Link className="dropdown-item" to="/class12">Class 12 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class11">Class 11 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class10">Class 10 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class9">Class 9 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class8">Class 8 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class7">Class 7 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class6">Class 6 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class5">Class 5 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class4">Class 4 Tuition</Link></li>
       <li><Link className="dropdown-item" to="/class3">Class 3 Tuition</Link></li>
     </ul>
   </li>
   <li className="nav-item dropdown">
     <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       Tuition By Subject
     </Link>
     <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       <li><Link className="dropdown-item" to="/physics">Physics</Link></li>
       <li><Link className="dropdown-item" to="/chemistry">Chemistry</Link></li>
       <li><Link className="dropdown-item" to="">Biology</Link></li>
       <li><Link className="dropdown-item" to="/cm">Computer Science</Link></li>
       <li><Link className="dropdown-item" to="/math">Maths</Link></li>
       <li><Link className="dropdown-item" to="/science">Science</Link></li>
       <li><Link className="dropdown-item" to="/english">English</Link></li>
       <li><Link className="dropdown-item" to="/socialstudy">Social Study(All Subject)</Link></li>
       <li><Link className="dropdown-item" to="/iti">ITI Foundation(All)</Link></li>
     </ul>
   </li>
 </ul>
</div>
</div>
</nav>

<form className='class12form'>
<div class="mb-3 " >
<label for="exampleInputEmail1" class="form-label">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
{/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
</div>
<div class="mb-3 " >
<label for="exampleInputEmail1" class="form-label">Contact Number</label>
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
