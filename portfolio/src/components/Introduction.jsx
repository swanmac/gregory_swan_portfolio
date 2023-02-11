import React from 'react'


export default function Introduction () {
    return (
        <div className= 'pt-40'>
        <div className="intro-container">
        <div className="intro-top">
        <div className="slide-in-left"></div>    
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 leading-8'>Gregory Swan</h1>
            <h2 className='md:text-5xl sm:text-4xl text-2xl font-bold md:py-6'>Full Stack Developer</h2>
        </div>
        <div className="intro">
         <p><img className='mx-auto flex items-center' src="https://sunbizlocal.com/gs.jpg"></img> </p>  
         <h3 className='md:text-xl max-w-md mx-auto pb-5 pt-10'> I'm Greg Swan
         a Full-Stack Software Developer</h3>
         <div className='md:mx-auto'>
         <p className='md:text-xl max-w-md mx-auto pb-5'> I have a passion for coding and I look forward to contributing my skills to full-stack development projects.</p>
         <p className='md:text-xl max-w-md mx-auto pb-10'>Please see my portfolio of projects. I am confident that I will be an asset to your organization.</p>
         </div>

 
                  
            </div>        
         </div>
         </div> 
    )
}