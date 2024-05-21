import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip,faLayerGroup,faGamepad } from '@fortawesome/free-solid-svg-icons';
export default function Specialties(){
    return(
        <div className='flex justify-between items-center text-white font-bebas mt-32'>
            <div className='ml-96 flex flex-col items-center gap-2'>
                <FontAwesomeIcon icon={faMicrochip} className='h-16 w-16 text-center'/>
                <p>I love Low level programming</p>
            </div>
            <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={faLayerGroup} className='h-16 w-16'/>
            </div>
            <div className='mr-96 flex flex-col items-center'>
                <FontAwesomeIcon icon={faGamepad} className='h-16 w-16'/>
            </div>
      </div>
      
    );
}