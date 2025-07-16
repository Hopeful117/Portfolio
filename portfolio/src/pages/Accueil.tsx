import Skill from '../components/Skill'
import {fetchSkill} from '../api/projets.js'
import { useState,useEffect } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
type SkillProp={
    language:string,
    level:number,
    icone:string
}
export default function Accueil(){
    const [skills,setSkill]=useState([])
    useEffect(()=>{
    const getSkill=async()=>{
        try{
        const res= await fetchSkill()
        setSkill(res.data)

    }
        catch(error){
             console.error("Erreur lors du chargement des skills :", error);

        }
    }

        getSkill()
    },[])
        
    return(
<>
        <section className="mb-12 flex flex-col justify-center items-center p-5">
        <h2 className="text-4xl font-bold mb-2 text-white">Ludovic Brot</h2>
        <p className="text-xl text-white dark:text-gray-300 text-center">Développeur web junior en reconversion</p>
        <p className="mt-4 max-w-2xl text-white text-center">Rigoureux, autonome et passionné, je recherche une alternance en CDA ou un premier poste dans une équipe technique pour contribuer à des projets concrets.</p>
      </section>
      

      <section className="md:mb-12 md:m-20">
        <h2 className="text-2xl font-semibold mb-4 text-white">Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill:SkillProp,index)=>(
        <div className="bg-white dark:bg-gray-700 p-4 rounded shadow flex justify-between items-center h-view" key={index}>
            <Skill {...skill}/>
        </div>
        ))
    }
        
        </div>
      </section>
       <section className="flex justify-center items-center md:m-50 mt-5 text-white p-5">
            <div className="w-4/5 max-w-xl text-center">
              <h2 className="text-4xl font-bold mb-6">Me contacter</h2>
              <p className="text-lg mb-8">
                Vous souhaitez collaborer, discuter d’un projet ou simplement échanger ?
                Retrouvez-moi sur les plateformes ci-dessous.
              </p>
      
              <div className="flex justify-center gap-10 text-4xl">
                <a
                  href="https://github.com/hopeful117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                  aria-label="Lien GitHub"
                >
                  <FaGithub />
                </a>
      
                <a
                  href="https://www.linkedin.com/in/ludovicbrot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                  aria-label="Lien LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
      
              <p className="mt-10 text-sm text-gray-400">
                Ou contactez-moi directement par mail :{" "}
                <a
                  href="mailto:ludovic.brot@gmail.com"
                  className="text-blue-300 hover:underline "
                >
                  ludovic.brot@gmail.com
                </a>
              </p>
            </div>
          </section>
     
    
    </>
    )
}


