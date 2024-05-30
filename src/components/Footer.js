import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="text-white font-bebas mt-8">
        <div className='flex justify-center mb-8'>
        <div className='flex flex-col justify-center text-center gap-2 w-2/3'>
          {/* <h3 className='text-4xl'>About</h3> */}
          <p className='text-2xl'>
            My name is Gabe Volheim, the founder of Midnite Software. With a profound passion for technology and esports, I established Midnite Software to revolutionize the esports industry, leveraging innovative solutions and cutting-edge technologies to enhance the competitive gaming experience.
          </p>
        </div>
        </div>
      <div className='flex flex-col justify-evenly items-center mx-64 gap-8'>
        {/* <div className='flex flex-col items-center gap-2 w-1/3'>
          <h3 className='text-4xl text-slate-400'>Links</h3>
          <a className='text-2xl text-sky-400' href='/wip'>Contact</a>
          <a className='text-2xl text-sky-400' href="https://linkedin.com/in/gabe-volheim-1035141b0">LinkedIn</a>
          <a className='text-2xl text-sky-400' href='https://github.com/GabeVolheim'>Github</a>
          <a className='text-2xl text-sky-400' href='/wip'>Midnite</a>
        </div> */}
        <div className='flex flex-col items-center gap-2 w-1/3'>
          <h3 className='text-4xl text-cyan-400'>Contact Information</h3>
          <div className='flex justify-center gap-8 text-cyan-300'>
                <a href="https://linkedin.com/in/gabe-volheim-1035141b0">
                    <FontAwesomeIcon icon={faLinkedin} size='xl'/>
                </a>
                <a href='https://github.com/GabeVolheim'>
                    <FontAwesomeIcon icon = {faGithub} size='xl'/>
                </a>
          </div>
          <p className='text-2xl mt-2'>gabevolheim@gmail.com</p>
          <p className='text-2xl'>706-594-4812</p>
          <p className='text-2xl'>Anderson SC</p>
        </div>
      </div>
      {/* <div className='flex justify-center gap-8 text-cyan-400 mt-4'>
        <a href="https://linkedin.com/in/gabe-volheim-1035141b0">
            <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
        </a>
        <a href='https://github.com/GabeVolheim'>
            <FontAwesomeIcon icon = {faGithub} size='2xl'/>
        </a>
      </div> */}
      <p className="bg-slate-700 text-center mt-4 p-2">© 2024 Gabe Volheim</p>
    </footer>
  );
};

export default Footer;
