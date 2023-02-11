import React from 'react';
import { Link } from 'react-router-dom'

export default function Project4 () {

    return ( 

        <div className="project4-text">
          <h2 className='text-2xl'>Metal Geek</h2>
            <img className='mx-auto flex items-center pt-4 w-300 h-220'  src="https://sunbizlocal.com/mgt.png"></img>
            <p className='md:text-xl max-w-lg mx-auto pb-5 pt-3'>A full-stack application created using React (front end) and Django (back end) built with a Postgresql database.</p>
            <h3 className='text-2xl pt-3 pb-3'>Project Overview</h3>

            <p className='md:text-xl max-w-lg mx-auto pb-5'>The goal is to allow all guitarists to learn about the actual guitar rigs that their favorite guitarists are or were using.

            Our plan is to provide simple navigation from our list of top lead guitar players, to their guitar rig model.

            Then on to the rig details model which will go into more detail for each artist rig details setup.
            <br />
            <br />
            Select an artist to view their general information: Bio, Bands, Website, and photo.
            Select that artist again and you will be brought to that artists rig details. Which includes: Guitarist name, Guitars, Pedals, Amplifiers, Year of the Rig, and Photo of the Rig.
            Select (or click on) the Rig Details and you will be brought to the Rig Design Details. Which includes a detailed description of how the rig is laid out. Tuning: any special tuning, guitar pickup details, string details, etc...
            We have also included an instrument gear database that is full CRUD.</p>

 
            
            <br />
            <br />
            


        <div className="p3bottom">
            <h3> <a href="https://metal-geek.netlify.app/" target=" _blank" rel="noopener noreferrer">Deployed Site</a></h3>
            
            <h3> <a href="https://github.com/swanmac/Metal_Geek/tree/main/metal-geek" target=" _blank" rel="noopener noreferrer">GitHub Repository</a></h3>
            </div>
    </div>        


    )
}