import { Link } from 'react-router-dom'


export default function Nav () {
    

    return (
        <div className="navbar">
            

            <Link to="/"><h3>Home</h3></Link>

            <Link to="/projects"><h3>Projects</h3></Link>

            <Link to="/about"><h3>About</h3></Link>

            <Link to="/contact"><h3>Contact</h3></Link>

            <Link to="/resume-greg.pdf" target=" _blank" rel="noopener noreferrer"><h3>Resume</h3></Link>


        </div>
    )
}