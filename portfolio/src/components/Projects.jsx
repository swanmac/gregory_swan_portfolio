import React from 'react';
import { Link } from 'react-router-dom'

export default function Projects () {
    return(
        <div className="projects">

        <Link to="project1"><h3>Project-1 Tic Tac Toe</h3></Link>
        <img src="https://sunbizlocal.com/tic.png"></img>

        <Link to="project2"><h3>Project-2 Trivia Junction</h3></Link>
        <img src="https://sunbizlocal.com/triv.png"></img>

        <Link to="project3"><h3>Project-3 The Cocktail Selector</h3></Link>
        <img src="https://sunbizlocal.com/coct.png"></img>

</div>
 )           

}    