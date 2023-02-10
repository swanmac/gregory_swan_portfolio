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
        <h1>About</h1>
        <p>
        Software developer with extensive experience in technical SEO who believes that user experience and optimization are of equal importance. Trained as a full stack web developer. Provide great value with leadership skills, critical thinking, and efficient solutions.  Exceptional communication and thorough problem solving to create clean, precise code that will make a positive impact.
        </p>
        </div>
        <div className='pt-10'>
        <h2>Skills</h2>
        <ul>
            <p>Programming Languages: JavaScript, Html, CSS, Python</p>
            <p>Frameworks: React, Express, Django</p>
            <p>Databases: Postgres, SQL, RESTful APIs</p>
            <p>Developer Tools: Node.js, Git, Github, Visual Studio Code, Postico 2</p>
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
     
        </section>
    </about>

 )
}


