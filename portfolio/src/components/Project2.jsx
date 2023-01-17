import React from 'react';
import { Link } from 'react-router-dom'

export default function Project2 () {

    return ( 
    
        <div className="project2-text">
          <h2>Trivia Junction</h2>
            <img src="https://sunbizlocal.com/tv.png" className="trivia-photo"></img>
            <p>
            A trivia game built with HTML, CSS, and JavaScript.</p>
            <h3>Project Overview</h3>

            <p>Trivia game, each round with ten questions from various categories and difficulty levels separated into true/false questions.</p>    
            <p>The game begins with the game board showing the question counter on the top left at (Question 1/10) and the score showing 0 in the Your Score section in the top right.</p>
            <p>The true/false questions will load just below the question counter and the score. The player will examine the question and decide on a true/false answer. There are two container (buttons) below the question labeled (True) and (False). The player will make a choice to select either the True or False container (button) to answer the true/false question correctly.</p>
            <p>Once the answer choice selection is made by the player, the container (button) will change color, turning green for a correct answer or turning red for an incorrect answer.</p>
            <p>If the answer choice selection turns green and is correct, a score unit of 5 will be added to the Your Score counter.</p>
            <p>If the answer choice selection turns red and is incorrect, no score unit will be added to the Your Score counter.</p>
            <p>New true/false questions will be generated after each question is answered, regardless if the answer is correct or incorrect until the total questions equals 10 of 10.</p>
            <p>At the point when the Question total reaches 10 of 10 (Question 10/10) the player will then have the opportunity to select the "Do You Want To Play Again" button at the bottom of the page to restart the game.</p>

            <div className="project-button">
            <Link to="/projects" >
                        <button class="project-button">Projects</button>
                    
                    </Link>
            </div>   

            <br />
            <br />
            <br />

            <div className="p2bottom">
            <h3> <a href="https://dramatic-flame99.surge.sh/index.html" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Trivia_Junction" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            </div>


    </div>
    )
 }           
