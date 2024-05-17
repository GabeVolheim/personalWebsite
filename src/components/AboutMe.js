import React from 'react';
import mugshot from "../img/professional_photo.jpg"
const AboutMe = () => {
    return(
    <div className="flex justify-between items-center text-white font-bebas mt-32">
        <div className='ml-64 grid gap-2'>
            <div className='text-6xl font-bold p-4 text-center'>
                "The only thing that's impossible is impossibility." - Phineas
            </div>
            <div className='text-3xl p-4 text-center'>
                Hey, call me Gabe! I am a passionate computer programmer with a dream to do the impossible. I graduated from Little Ole Clemson with a degree in computer science, and since then, I've been immersed in the world of technology and coding. 
            </div>
        </div>
        <img src={mugshot} alt="A photo of me!" className="w-1/5 h-auto mr-64 rounded-lg border-4 border-white shadow-9xl transform transition duration-500 hover:scale-110 hover:shadow-lg"></img>
    </div>
    );
}
export default AboutMe;