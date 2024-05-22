import React from 'react';
import GoToTop from './GoToTop';


export default function Project1 () {

    return ( 
    
        <div className="project1-text">
          <div className='mx-auto pt-5'>  
          <h2 className='text-2xl text-[#4CAF50]'>Card Deck</h2>
            <img className='mx-auto flex items-center pt-4 w-300px h-220px' src="https://sunbizlocal.com/phone2.png" alt="project 1" ></img>
            <p className='md:text-xl max-w-lg mx-auto pt-5 pb-5'>
            An IOS application Card Game. The application was built with Swift using the SwiftUI.</p>
            <h3 className='text-2xl text-[#4CAF50] pt-3 pb-3'>Game Overview</h3>
            
                <p className='md:text-xl max-w-lg mx-auto pb-5'>A user will click on the deal button to deal the cards.
                The game is the player against the CPU.
                The higher card gets the point.
                The one with the most points win.</p>



            <br />
            <br />

            <div className="p1bottom md:text-xl pb-20">
            <h3> <a href="https://suncoastlocalmarketing.com/ios-card-deck-swiftui/" target=" _blank" rel="noopener noreferrer">Preview</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Card-Deck" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            
            </div>
            </div>
            <GoToTop />
        </div>
    )
}

