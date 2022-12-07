import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">

            <Link to="/componentA">
                <h2>About Me</h2>
            </Link>

            <Link to="/componentB">
                <h2>Contact</h2>
            </Link>

            <Link to="about">
                <h2>Home</h2>
            </Link>

            <Link to="/">
                <h2>Home</h2>
            </Link>

            <Link to="footer">
                <h3>Put LinkedIN and Github links here</h3>
            </Link>


        </div>
    )
}