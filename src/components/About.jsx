import React from 'react'
import img from '../assets/img/about.jpg'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
            <div className='w-full lg:w-3/4 space-y-4'>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>About Us</h1>
                <p className='text-justify lg:text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi, at? Obcaecati explicabo qui ipsa, nemo repudiandae
                    tempore? Quaerat, excepturi perferendis dicta dolore enim at sint!
                </p>
                <p className='text-justify lg:text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque suscipit cupiditate dicta adipisci. Possimus aut aliquam 
                    recusandae commodi! Iure libero praesentium porro?
                </p>
                <p className='text-justify lg:text-start'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint 
                    perspiciatis omnis placeat deleniti aperiam obcaecati natus cumque maxime, 
                    quisquam pariatur alias vitae.
                </p>

            </div>
            <div className='w-full lg:w-3/4'>
                <img src={img} alt="Not Found" className='rounded-lg' />
            </div>
        </div>
    )
}

export default About