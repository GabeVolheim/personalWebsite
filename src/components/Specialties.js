import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip,faLayerGroup,faGamepad } from '@fortawesome/free-solid-svg-icons';
export default function Specialties(){
    return(
        <div className='text-white font-bebas mt-64'>
            <div className='grid gap-2'>
                <h1 className='text-6xl text-center'> My expertise and passions</h1>
                <h2 className='text-center text-3xl'> “Passion is the genesis of genius.” — Tony Robbins </h2>
            </div>
            <div className='flex justify-evenly items-center text-white font-bebas mt-16 gap-16 mb-64 text-lg text-justify'>
                <div className='ml-96 flex flex-col items-center gap-2 w-1/3 '>
                    <FontAwesomeIcon icon={faMicrochip} className='h-16 w-16'/>
                    <p>I have a deep passion for low-level programming, which drives me to explore and master the intricacies of system-level development. I have undertaken multiple personal projects that involve creating compilers and virtual machines, demonstrating my ability to design and implement complex software systems from the ground up.</p>
                </div>
                <div className='flex flex-col items-center gap-2 w-1/3 '>
                    <FontAwesomeIcon icon={faLayerGroup} className='h-16 w-16'/>
                    <p>I am experienced in full-stack development, specializing in creating robust and scalable applications. My expertise includes a frontend built with React and a backend powered by Node.js and Express. I am proficient in using Tailwind CSS for responsive design and MySQL for database management.</p>
                </div>
                <div className='mr-96 flex flex-col items-center  gap-2  w-1/3 '>
                    <FontAwesomeIcon icon={faGamepad} className='h-16 w-16'/>
                    <p>I am deeply passionate about esports, having been an avid player since my youth. My dedication to the sport drives me to make it more accessible and inviting for young enthusiasts. My current project focuses on expanding the accessibility of esports, creating a welcoming environment for the next generation of players.</p>
                </div>
        </div>
      </div>
    );
}