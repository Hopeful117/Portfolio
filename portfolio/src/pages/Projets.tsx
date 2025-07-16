import React from "react";
import PortfolioMasonry from "../components/Grid.js"
import { useEffect, useState } from "react";

import {fetchProject} from "../api/projets.js"
import Projets from "../components/Projets.js";
type Projets = {
  title: string;
  description: string;
  technologies: string;
  github_link?: string;
  demo_link?: string;
  preview: string;
  categorie:string;

}
const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async ()=>{
   

  try{
  const res =await fetchProject()
setProjects(res.data);
  }
      catch(error) {
        console.error("Erreur lors du chargement des projets :", error);
      };
    }
    getProjects()
  }, []);



  return (
    <>
     <h2 className="text-3xl font-bold text-center text-white">Mes projets</h2>
      <PortfolioMasonry items={projects} renderItem={(projet:Projets)=><Projets {...projet}/>} />
    </>
    
  );
};

export default ProjectsPage;
