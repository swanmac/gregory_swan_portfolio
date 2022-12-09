import { Link } from 'react-router-dom'

export default function Nav () {
    

    return (
        <div className="navbar">
            <div className="nav-center"></div>

            <Link to="/"><h3>Home</h3></Link>

            <Link to="/projects"><h3>Projects</h3></Link>

            <Link to="/contact"><h3>Contact</h3></Link>

            <Link to="/about"><h3>About</h3></Link>

         


        </div>
    )
}