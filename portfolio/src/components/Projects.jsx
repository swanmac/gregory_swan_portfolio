import React from 'react';
import { Link } from 'react-router-dom'
import GoToTop from './GoToTop';


export default function Projects () {
    return(
        
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 pt-5">
        <div className="project p1">    
        <Link to="/project1"><h3 className='text-2xl'>Card Deck</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>An IOS application which is a Card Game. The application was built with Swift using the SwiftUI.</p>
        <Link to="/project1"><img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/phone.png" alt="project 1" ></img></Link></div>

        <div className="project p2"> 
        <Link to="/project2"><h3 className='text-2xl'>Trivia Junction</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>A true/false trivia game created with JavaScript, HTML5, and CSS3 with a third party API.</p>
        <Link to="/project2"><img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/triva.png" alt="project 2" ></img></Link></div>

        <div className="project p1"> 
        <Link to="/project3"><h3 className='text-2xl'>The Cocktail Selector</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>An application developed using the React framework, JavaScript, HTML5 and CSS3, connected to a third party API.</p>
        <Link to="/project3"><img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220'  src="https://sunbizlocal.com/coc.png" alt="project 3" ></img></Link></div>

        <div className="project p1"> 
        <Link to="/project4"><h3 className='text-2xl'>Metal Geek</h3></Link>
        <p className='md:text-xl max-w-lg mx-auto pb-5 px-10'>A full-stack application with React (front end) and Django (back end) using a PostgreSQL database. Styled with Tailwind CSS.</p>
        <Link to="/project4"><img className='mx-auto flex items-center pt-4 pb-5 w-300 h-220' src="https://sunbizlocal.com/meta.png" alt="project 4" ></img></Link></div>

        <br />
        <br />
        <br />
        <br />
        <GoToTop />
</div>
 )           

}    