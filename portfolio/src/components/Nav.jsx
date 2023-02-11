import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'

export default function Nav () {
    
    const [open, setOpen] = useState(false);


    return (
        
        <header className='py-2'>
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          
            <img src="https://sunbizlocal.com/gs.png" width={300} height={64} />

            <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />

            <nav className={`${open ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}>
           
            <ul className='text-xl lg:flex lg:justify-between'>
                <l1 className='lg:px-5 py-2 block'>
            <Link to="/"><h3>Home</h3></Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link to="/projects"><h3>Projects</h3></Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link to="/about"><h3>About</h3></Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link to="/contact"><h3>Contact</h3></Link></l1>
                <l1 className='lg:px-5 py-2 block'>
            <Link to="/greg-swan-resume.pdf" target=" _blank" rel="noopener noreferrer"><h3>Resume</h3></Link></l1>
            </ul>

            </nav>
            

        </div>
        </header>
    )
}