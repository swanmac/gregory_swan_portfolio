import React from 'react';
import { Link } from 'react-router-dom'

export default function Project1 () {

    return ( 
    
        <div className="project1-text">
          <h2>Tic Tac Toe</h2>
            <img src="https://sunbizlocal.com/tt.png"></img>
            <p>
            A tic tac toe game built with HTML, CSS, and JavaScript.</p>
            <h3>Game Overview</h3>
            
                <p>A user will be able to click on different squares to make a move.</p>
                <p>Every click will alternate between marking an X and O</p>
                <p>A cell may not be able to be replayed once marked.</p>
                <p>You are not able to click remaining empty cells after the game is over.</p>
            
               <p>A display message indicates which turn is about to be played.</p>
               <p>A display message indicates winner or draw.</p>

               <div className="project-button">
         <Link to="/projects" >
                        <button class="project-button">Projects</button>
                    
                    </Link>
            </div>   

            <br />
            <br />
            <br />

            <div className="p1bottom">
            <h3> <a href="https://perfect-actor12345.surge.sh/" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Tic-Tac-Toe" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            </div>
        </div>
    )
}


//install
//index
//import
//initialize