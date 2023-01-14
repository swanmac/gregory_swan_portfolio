import React from 'react';
import { Link } from 'react-router-dom'


export default function Projects () {
    return(
        <div className="grid">
        <div className="project p1">    
        <Link to="/project1"><h3>Tic Tac Toe</h3></Link>
        <p>A fun interactive game with varied outcomes created with JavaScript, HTML, and CSS.</p>
        <img src="https://sunbizlocal.com/tic.png" width="300" height="220"></img></div>

        <div className="project p2"> 
        <Link to="/project2"><h3>Trivia Junction</h3></Link>
        <p>A true/false trivia game built with JavaScript, HTML, and CSS connected to a third party API.</p>
        <img src="https://sunbizlocal.com/triv.png" width="300" height="220"></img></div>

        <div className="project p1"> 
        <Link to="/project3"><h3>The Cocktail Selector</h3></Link>
        <p>An application created using the React framework and CSS, connected to a third party API.</p>
        <img src="https://sunbizlocal.com/coct.png" width="300" height="220"></img></div>

        <div className="project p1"> 
        <Link to="/project4"><h3>Metal Geek</h3></Link>
        <p>A full-stack application created using the React (front end) and Django (back end) built with a Postgresql database.</p>
        <img src="https://sunbizlocal.com/met.png" width="300" height="220"></img></div>

</div>
 )           

}    