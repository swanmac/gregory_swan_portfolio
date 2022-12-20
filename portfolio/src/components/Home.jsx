import React from 'react';
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Icon from '../components/Icon'


export default function Home () {
    return(
        <div className="home">
            
            <div>
            
            <Introduction />
            <About />
            <Icon />
            <Contact />
            </div>

        </div>
    )
    
}