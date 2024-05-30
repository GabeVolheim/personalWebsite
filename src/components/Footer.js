import React from 'react';

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
      <div className='flex justify-evenly mx-64 gap-8'>
        <div className='flex flex-col items-center gap-2 w-1/3'>
          <h3 className='text-4xl'>Links</h3>
          <a className='text-2xl text-sky-400' href='/wip'>Contact</a>
          <a className='text-2xl text-sky-400' href="https://linkedin.com/in/gabe-volheim-1035141b0">LinkedIn</a>
          <a className='text-2xl text-sky-400' href='https://github.com/GabeVolheim'>Github</a>
          <a className='text-2xl text-sky-400' href='/wip'>Midnite</a>
        </div>
        <div className='flex flex-col items-center gap-2 w-1/3'>
          <h3 className='text-4xl'>Contact Information</h3>
          <p className='text-2xl'>gabevolheim@gmail.com</p>
          <p className='text-2xl'>706-594-4812</p>
          <p className='text-2xl'>Anderson SC</p>
        </div>
      </div>
      <p className="bg-slate-700 text-center mt-4 p-2">© 2024 Gabe Volheim</p>
    </footer>
  );
};

export default Footer;
