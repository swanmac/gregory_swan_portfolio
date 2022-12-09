import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'



export default function () {
    
    return (
        <div className="routes">
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="about" element={<About/>}/>
        <Route exact path="contact" element={<Contact/>}/>
        <Route exact path="projects" element={<Projects/>}/>
    </Routes>

        </div>
    )
}

