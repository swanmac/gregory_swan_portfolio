import React from 'react';
import { Link } from 'react-router-dom'

export default function Projects () {
    return(
        <div className="projects">

        <Link to="project1"><h3>Project1</h3></Link>

        <Link to="project2"><h3>Project2</h3></Link>

        <Link to="project3"><h3>Project3</h3></Link>

</div>
 )           

}    