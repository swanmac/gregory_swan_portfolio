import React from 'react';
import GoToTop from './GoToTop';


export default function Project1 () {

    return ( 
    
        <div className="project1-text">
          <div className='mx-auto pt-5'>  
          <h2 className='text-2xl text-[#4CAF50]'>Tic Tac Toe</h2>
            <img className='mx-auto flex items-center pt-4 w-300px h-220px' src="https://sunbizlocal.com/tictac.png" alt="project 1" ></img>
            <p className='md:text-xl max-w-lg mx-auto pt-5 pb-5'>
            A tic tac toe game built with HTML, CSS, and JavaScript.</p>
            <h3 className='text-2xl text-[#4CAF50] pt-3 pb-3'>Game Overview</h3>
            
                <p className='md:text-xl max-w-lg mx-auto pb-5'>A user will be able to click on different squares to make a move.
               Every click will alternate between marking an X and O
                A cell may not be able to be replayed once marked.
                You are not able to click remaining empty cells after the game is over.
               A display message indicates which turn is about to be played.
                A display message indicates winner or draw.</p>



            <br />
            <br />

            <div className="p1bottom md:text-xl pb-20">
            <h3> <a href="https://perfect-actor12345.surge.sh/" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Tic-Tac-Toe" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            
            </div>
            </div>
            <GoToTop />
        </div>
    )
}

