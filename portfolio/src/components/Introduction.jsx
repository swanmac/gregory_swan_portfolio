import React from 'react'
import { Link } from "react-router-dom";

export default function Introduction () {
    return (
        <div className="intro-container">
        <div className="intro-top">
        <div className="slide-in-left"></div>    
            <h1>Gregory Swan</h1>
            <h2>Full Stack Developer</h2>
        </div>
        <div className="intro">
         <p><img src="https://sunbizlocal.com/gs.jpg"></img> </p>  
         <h3> I'm Greg Swan
         a Full-Stack Software Developer</h3>
         <p> I have a passion for coding and I look forward to contributing my skills to full-stack development projects.</p>
         <p>Please see my portfolio of projects. I am confident that I will be an asset to your organization.</p>

         <div className="intro-button">
         <Link to="/projects" >
                        <button class="intro-button">Projects</button>
                    
                    </Link>
            </div>        
         </div>
         </div> 
    )
}