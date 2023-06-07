import React from 'react';
import GoToTop from './GoToTop';

export default function Project3 () {

    return ( 

        <div className="project3-text pt-5">
          <h2 className='text-2xl text-[#4CAF50]'>The Cocktail Selector</h2>
            <img className='mx-auto flex items-center pt-4 w-300 h-220' src="https://sunbizlocal.com/cc2.png" alt="project 3" ></img>
            <p className='md:text-xl max-w-lg mx-auto pb-5 pt-3'>An application created using the React framework connected to a third party API.</p>
            <h3 className='text-2xl text-[#4CAF50] pt-3 pb-3'>Project Overview</h3>

            <p className='md:text-xl max-w-lg mx-auto pb-5'>
            This project was built using React, JavaScript, HTML5, and CSS. The data was generated from a third party API. A search bar was created to fetch data from the API and have it rendered on the page.
            <br />
            <br />
            The Cocktail Selector is a website that
            provides detailed information on a list of different cocktails enabling the user to make an informed decision when choosing a cocktail.
            <br />
            <br />
            The Layout - Navigation links at the top of the page are to "Home" the Home page and "About" the About page. Below the navigation links is the Search Form. The Search Form is labeled "Search Your Favorite Cocktail" and contains a text input bar and a Start Over button.
            <br />
            <br />
            Search Form - The search form allows the user to select a single or group of cocktails by entering the first or any letter in the name of the cocktail into the text input bar.</p>
            
 
 
            
            <br />
            <br />
            <br />


        <div className="p3bottom md:text-xl pb-20">
            <h3> <a href="https://the-cocktail-selector.netlify.app/" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/the-cocktail-selector" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            </div>
            <GoToTop />
    </div>        


    )     

}   