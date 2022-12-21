import React from 'react';
import { Link } from 'react-router-dom'


export default function Projects () {
    return(
        <div className="grid">
        <div className="project p1">    
        <Link to="/project1"><h3>P-1 Tic Tac Toe</h3></Link>
        <img src="https://sunbizlocal.com/tic.png" width="300" height="220"></img></div>

        <div className="project p2"> 
        <Link to="/project2"><h3>P-2 Trivia Junction</h3></Link>
        <img src="https://sunbizlocal.com/triv.png" width="300" height="220"></img></div>

        <div className="project p1"> 
        <Link to="/project3"><h3>P-3 The Cocktail Selector</h3></Link>
        <img src="https://sunbizlocal.com/coct.png" width="300" height="220"></img></div>

</div>
 )           

}    