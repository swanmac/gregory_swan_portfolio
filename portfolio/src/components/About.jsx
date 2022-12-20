import IconHtml from "./SVG/IconHtml";
import IconReact from "./SVG/IconReact";
import IconCSS from "./SVG/IconCSS";
import IconJS from "./SVG/IconJS";
import IconPython from "./SVG/IconPython";
import IconExpress from "./SVG/IconExpress";
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
        <h1>About</h1>
        <p>
        Software developer with extensive experience in technical SEO who believes that user experience and optimization are of equal importance. I am trained as a full stack web developer and I provide great value with my leadership skills, critical thinking and efficient solutions.  I have worked in a variety of niches and I am dedicated, through my use of exceptional communication and thorough problem solving to create clean, precise code that will make a difference.
        </p>
        <h2>Skills</h2>
        <ul>
            <p>Programming Languages: JavaScript, Html, CSS, Python</p>
            <p>Frameworks: React, Express, Django</p>
            <p>Databases: Postgres, SQL, RESTful APIs</p>
            <p>Developer Tools: Node.js, Git, Github, Visual Studio Code, Postico 2</p>
        </ul>
    </div>
</div>

   <section>
    <div className="skillIcons">
    <IconHtml />
    <IconReact />
    <IconCSS />
    <IconJS />
    <IconPython />
    <IconExpress />
    </div>
    
    <div className="skillIcons">
    <IconDJ />
    <IconGit />
    <IconMySQL />
    <IconNodeJS />
    <IconPostgres />
    <IconSequelize />

        </div>
        </section>
    </about>

 )
}


