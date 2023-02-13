import IconHtml from "./SVG/IconHtml";
import IconReact from "./SVG/IconReact";
import IconCSS from "./SVG/IconCSS";
import IconJS from "./SVG/IconJS";
import IconPython from "./SVG/IconPython";
import IconVScode from "./SVG/IconVScode";
import IconDJ from "./SVG/IconDJ";
import IconGit from "./SVG/IconGit";
import IconMySQL from "./SVG/IconMySQL";
import IconNodeJS from "./SVG/IconNodeJS";
import IconPostgres from "./SVG/IconPostgres";
import IconSequelize from "./SVG/IconSequelize";

export default function About () {
    return(
        <about>
<div className="about-container">
    <div className="about-info">
        <div className='pt-20'>
        <h1 className='text-2xl'>About</h1>
        <p className='md:text-xl max-w-md mx-auto pb-5'>
        Digital marketer turned web developer who brings technical knowledge, enthusiasm and a dedicated work ethic to every team. Successfully trained as a full stack web developer. Provide great value with leadership skills, critical thinking, and efficient solutions.  Exceptional communication and thorough problem solving to create clean, precise code that will make a positive impact.
        </p>
        </div>
        <div className='pt-10'>
        <h2 className='text-2xl'>Skills</h2>
        <ul>
            <p className='md:text-xl max-w-md mx-auto pb-5'>
            <li>Programming Languages: JavaScript, Html, Python </li>
            <li>Frameworks: React, Express, Django, Tailwind Css </li>
            <li>Databases: Postgres, SQL, RESTful APIs </li>
            <li>Developer Tools: Node.js, Git, Github, Visual Studio Code, Postico 2</li></p>
        </ul>
        </div>
    </div>
</div>

   <section className='pt-20'>
    <div className="skillIcons">
    <IconHtml />
    <IconReact />
    <IconCSS />
    <IconJS />
    
    </div>
    
    <div className="skillIcons">
    <IconDJ />
    <IconGit />
    <IconMySQL />
    <IconNodeJS />
    
    </div>

    <div className="skillIcons">    
    <IconPython />
    <IconVScode />
    <IconPostgres />
    <IconSequelize />

    </div>  
    
    <br />
    <br /> 
    <br />
    <br /> 
     
        </section>
    </about>

 )
}


