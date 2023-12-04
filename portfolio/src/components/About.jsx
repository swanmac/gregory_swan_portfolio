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
<div className="bg-gradient-to-br from-gray-800 to-blue-600 ">
    <div className="about-info">
        <div className='pt-20'>
        <h1 className='text-2xl'>About</h1>
        <p className='md:text-xl max-w-md mx-auto pb-5'>
        Full Stack Developer who brings technical knowledge, enthusiasm and a dedicated work ethic to every team. Proven expertise in front-end and back-end technologies, with extensive technical SEO experience.  Excels in collaborative environments, bringing a strong foundation in problem-solving and a commitment to delivering high-quality code. Eager to contribute technical proficiency and creative solutions to drive the success of development projects.
        </p>
        </div>
        <div className='pt-10'>
        <h2 className='text-2xl'>Tech Skills</h2>
        <ul>
            <p className='md:text-xl max-w-md mx-auto pb-5'>
            <li>Programming Languages: JavaScript, Python, Swift, HTML5, CSS3 </li>
            <li>Frameworks: React, SwiftUI, UIkit, Express, Django, Tailwind CSS </li>
            <li>Databases: PostgreSQL, SQL, RESTful APIs </li>
            <li>Developer Tools: Visual Studio Code, Xcode, Node.js, Git, Github, Postico 2, Postman, Insomnia</li></p>
        </ul>
        </div>
    </div>
</div>

   <section className='bg-gradient-to-br from-gray-900 to-gray-600 pt-20'>
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


