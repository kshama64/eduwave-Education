import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import HomePage from './components/HomePage.jsx'
import Coursesforkids from './components/Courses for kids.jsx'
import Freestudymaterial from './components/Free study material.jsx'
import Onlinecentres from './components/Online centres.jsx'
import CBSE from './components/CBSE.jsx'
import NCERTsolution from './components/NCERT solution.jsx'
import JEEmain from './components/JEE main.jsx'
import JEEAdvanced from './components/JEE Advanced.jsx'
import NEET from './components/NEET.jsx'
import Class12tuition from './components/Class12 tuition.jsx'
import Class11tuition from './components/Class11 tuition.jsx'
import Class10tuition from './components/Class10 tuition.jsx'
import Class9tuition from './components/Class9 tuition.jsx'
import Class8tuition from './components/Class8 tuition.jsx'
import Class7tuition from './components/Class7 tuition.jsx'
import Class6tuition from './components/Class6 tuition.jsx'
import Class5tuition from './components/Class5 tuition.jsx'
import Class4tuition from './components/Class4 tuition.jsx'
import Class3tuition from './components/Class3 tuition.jsx'
import Physics from './components/Physics.jsx'
import Chemistry from './components/Chemistry.jsx'
import Biology from './components/Biology.jsx'
import ComputerScience from './components/Computer Science.jsx'
import Math from './components/Math.jsx'
import Science from './components/Science.jsx'
import English from './components/English.jsx'
import Socialstudy from './components/Socialstudy.jsx'
import ITI from './components/ITI.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
        <Route path='/' element={<Hero/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/courses' element={<Coursesforkids/>}/>
        <Route path='/study' element={<Freestudymaterial/>}/>
        <Route path='/online' element={<Onlinecentres/>}/>
        <Route path='/ncert' element={<NCERTsolution/>}/>
        <Route path='/cbse' element={<CBSE/>}/>
        <Route path='/jee' element={<JEEmain/>}/>
        <Route path='/jeeadv' element={<JEEAdvanced/>}/>
        <Route path='/neet' element={<NEET/>}/>
        <Route path='/class12' element={<Class12tuition/>}/>
        <Route path='/class11' element={<Class11tuition/>}/>
        <Route path='/class10' element={<Class10tuition/>}/>
        <Route path='/class9' element={<Class9tuition/>}/>
        <Route path='/class8' element={<Class8tuition/>}/>
        <Route path='/class7' element={<Class7tuition/>}/>
        <Route path='/class6' element={<Class6tuition/>}/>
        <Route path='/class5' element={<Class5tuition/>}/>
        <Route path='/class4' element={<Class4tuition/>}/>
        <Route path='/class3' element={<Class3tuition/>}/>
        <Route path='/physics' element={<Physics/>}/>
        <Route path='/chemistry' element={<Chemistry/>}/>
        <Route path='/biology' element={<Biology/>}/>
        <Route path='/cm' element={<ComputerScience/>}/>
        <Route path='/math' element={<Math/>}/>
        <Route path='/science' element={<Science/>}/>
        <Route path='/english' element={<English/>}/>
        <Route path='/socialstudy' element={<Socialstudy/>}/>
        <Route path='/iti' element={<ITI/>}/>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)