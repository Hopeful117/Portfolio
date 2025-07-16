
import './App.css'
import {lazy,Suspense} from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil'

import About from './pages/About';
import Contact from './pages/Contact';
const Projets= lazy(()=>import('./pages/Projets'));
const Certications=lazy(()=>import('./pages/Certification')) 


function App() {
  

  return (
    <>
    <Header />
    <main className="w-full  bg-gray-900 dark:bg-gray-900 shadow-md flex items-center flex-col justify-center h-view md:pt-32">
      <Routes>
        <>
      <Route path="/" element = {<Accueil/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>} />
      
      
      <Route path="/projets" element ={<Suspense fallback={<div>Chargement…</div>}> 
      <Projets/>
      </Suspense>
      }
      />
     
      <Route path="/certifications" element = {<Suspense fallback={<div>Chargement...</div>}>
        <Certications/>
        </Suspense>}
        />
       </>
      </Routes>
    </main>

    </>
  )
}

export default App
