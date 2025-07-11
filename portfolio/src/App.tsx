
import './App.css'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil'

import About from './pages/About';
import Contact from './pages/Contact';
import Projets from './pages/Projets';
import Certications from './pages/Certification'


function App() {
  

  return (
    <>
    <Header />
    <main className="w-full  bg-gray-900 dark:bg-gray-900 shadow-md flex items-center flex-col justify-center h-view pt-32">
      <Routes>
      <Route path="/" element = {<Accueil/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/projets" element = {<Projets/>} />
      <Route path="/certifications" element = {<Certications/>}/>
      </Routes>
    </main>

    </>
  )
}

export default App
