// src/components/Header.js
import React from 'react';
import logo from '../img/logo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <header className="bg-slate-800 shadow-md text-white p-4 flex justify-between items-center font-bebas">
    <div className="flex items-center ml-64">
        <h1 className = " ">
        <img src={logo} alt="Logo" className="w-12 h-12"></img>
        </h1>
        <h1 className="text-2xl pl-4">Volheim</h1>
    </div>
    <div className="flex items-center mr-64 gap-4">
        <a className="text-2xl" href = "/wip">Blog</a>
        <h4>
            <div>
                <button
                type="button"
                className="rounded-md bg-transparent hover:bg-slate-700 focus:outline-none"
                id="options-menu"
                aria-expanded="true"
                aria-haspopup="true"
                >
                    <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
                </button>
            </div>
        </h4>
    </div>
    </header>
  );
};

export default Header;
