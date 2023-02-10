import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

export default function Nav () {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='flex justify-between items-center h-30 max-w-[1240px] mx-auto px-4 text-white text-2xl'>
            <img className='mx-auto flex items-center' src="https://sunbizlocal.com/gs.png"></img>
           
            <ul className='hidden md:flex'>
                <l1 className='p-4'>
            <Link to="/"><h3>Home</h3></Link></l1>
                <l1 className='p-4'>
            <Link to="/projects"><h3>Projects</h3></Link></l1>
                <l1 className='p-4'>
            <Link to="/about"><h3>About</h3></Link></l1>
                <l1 className='p-4'>
            <Link to="/contact"><h3>Contact</h3></Link></l1>
                <l1 className='p-4'>
            <Link to="/greg-swan-resume.pdf" target=" _blank" rel="noopener noreferrer"><h3>Resume</h3></Link></l1>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
            
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[20%] flex flex-col justify-content-left' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            
                <l1 className='text-base p-2'>
                <Link to="/">Home</Link></l1>
                <l1 className='text-base p-2'>
                <Link to="/projects">Projects</Link></l1>
                <l1 className='text-base p-2'>
                <Link to="/about">About</Link></l1>
                <l1 className='text-base p-2'>
                <Link to="/contact">Contact</Link></l1>
                <l1 className='text-base p-2'>
                <Link to="/greg-swan-resume.pdf" target=" _blank" rel="noopener noreferrer">Resume</Link></l1>
              </ul>


        </div>
    )
}