// src/components/Header.tsx
import React from 'react';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Ludovic Brot
        </h1>

        
        <nav className="space-x-6 hidden md:flex">
      
          
           <NavLink className="text-gray-700 dark:text-gray-200 hover:underline" to={'/'}>Accueil</NavLink>
            <NavLink className="text-gray-700 dark:text-gray-200 hover:underline" to={'/about'}>About</NavLink>
        
          <NavLink className="text-gray-700 dark:text-gray-200 hover:underline" to={'/projets'}>Projets</NavLink>

          <NavLink className="text-gray-700 dark:text-gray-200 hover:underline" to={'/certifications'}>Certification</NavLink>
          <NavLink className="text-gray-700 dark:text-gray-200 hover:underline" to={'/contact'}>Contact</NavLink>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
