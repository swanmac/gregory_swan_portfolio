import React from 'react';
import { Link } from 'react-router-dom'

export default function Project3 () {

    return ( 

        <div className="project3-text">
          <h2>The Cocktail Selector</h2>
            <img src="https://sunbizlocal.com/cc.png"></img>
            <p>An application created using the React framework connected to a third party API.</p>
            <h3>Project Overview</h3>
            <p>The Cocktail Selector is a website that provides detailed information on a list of different cocktails enabling the user to make an informed decision when choosing a cocktail.</p>
            <p>The Layout - Navigation links at the top of the page are to "Home" the Home page and "About" the About page. Below the navigation links is the Search Form. The Search Form is labeled "Search Your Favorite Cocktail" and contains a text input bar and a Start Over button.</p>
            <p>Search Form - The search form allows the user to select a single or group of cocktails by entering the first few letters in the name of the cocktail into the text input bar. The Start Over button is used to reset the search form or start over.</p>
            <p></p>

            <div className="project-button">
         <Link to="/projects" >
                        <button class="project-button">Projects</button>
                    
                    </Link>
            </div>   
            
            <br />
            <br />
            <br />


        <div className="p3bottom">
            <h3> <a href="https://prickly-credit99.surge.sh/" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Cocktail_Selector" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            </div>
    </div>        


    )     

}   