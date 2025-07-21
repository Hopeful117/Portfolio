// src/components/Header.tsx
import React from 'react';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="md:max-w-6xl md:mx-auto px-4 py-4 flex md:flex-row md:items-center md:justify-between flex-col">
      
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center">
          Ludovic Brot
        </h1>

        
        <nav className="md:space-x-6 flex md:justify-between md:flex-row  justify-between   md:mt-0 mt-5 font-bold">
      
          
           <NavLink className={({isActive})=>isActive?"text-gray-700 dark:text-gray-200 hover:underline  underline" :"text-gray-700 dark:text-gray-200 hover:underline"} to={'/'}>Accueil</NavLink>
            <NavLink className={({isActive})=>isActive?"text-gray-700 dark:text-gray-200 hover:underline  underline" :"text-gray-700 dark:text-gray-200 hover:underline"} to={'/about'}>About</NavLink>
        
          <NavLink className={({isActive})=>isActive?"text-gray-700 dark:text-gray-200 hover:underline  underline" :"text-gray-700 dark:text-gray-200 hover:underline"} to={'/projets'}>Projets</NavLink>
<NavLink className={({isActive})=>isActive?"text-gray-700 dark:text-gray-200 hover:underline  underline" :"text-gray-700 dark:text-gray-200 hover:underline"} to={'/certifications'}>Certification</NavLink>
<NavLink className={({isActive})=>isActive?"text-gray-700 dark:text-gray-200 hover:underline  underline" :"text-gray-700 dark:text-gray-200 hover:underline"}to={'/contact'}>Contact</NavLink>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
