import React from 'react';
import { Link } from 'react-router-dom'


export default function Projects () {
    return(
        <div className="grid-cols-1 md:grid-cols-2">
        <div className="project p1">    
        <Link to="/project1"><h3 className='text-2xl'>Tic Tac Toe</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>Check out this fun interactive game with varied outcomes created with JavaScript, HTML, and CSS.</p>
        <img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/tic.png"></img></div>

        <div className="project p2"> 
        <Link to="/project2"><h3 className='text-2xl'>Trivia Junction</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>A ten question true/false trivia game created with JavaScript, HTML, and CSS connected to a third party API.</p>
        <img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/triva.png"></img></div>

        <div className="project p1"> 
        <Link to="/project3"><h3 className='text-2xl'>The Cocktail Selector</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>An application created using the React framework, JavaScript and CSS, connected to a third party API.</p>
        <img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/coct.png"></img></div>

        <div className="project p1"> 
        <Link to="/project4"><h3 className='text-2xl'>Metal Geek</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>A full-stack application with React (front end) and Django (back end) built with a Postgresql database.</p>
        <img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220' src="https://sunbizlocal.com/meta.png"></img></div>

        <br />
        <br />
        <br />
        <br />

</div>
 )           

}    