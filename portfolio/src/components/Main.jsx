import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'



export default function () {
    
    return (
        <div className="routes">
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="about" element={<About/>}/>
        <Route exact path="contact" element={<Contact/>}/>
        <Route exact path="projects" element={<Projects/>}/>
        <Route exact path="project1" element={<Project1/>}/>
        <Route exact path="project2" element={<Project2/>}/>
        <Route exact path="project3" element={<Project3/>}/>
    </Routes>

        </div>
    )
}

