import React from "react";

import Grid from "../components/Grid.js"
import { useEffect, useState } from "react";

import {fetchCertification} from "../api/projets.js"
import Certification from "../components/Certifcation.js";
type CertificationProps = {
    title:string,
    preview:string,
    link:string,
    description:string,
}

const CertificationPage: React.FC = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    const getCertifications = async ()=>{
   

  try{
  const res =await fetchCertification()
setCertifications(res.data);
  }
      catch(error) {
        console.error("Erreur lors du chargement des certifications :", error);
      };
    }
    getCertifications()
  }, []);



  return (
    <>
     <h2 className="text-3xl font-bold text-center text-white">Mes certifications</h2>
      <Grid items={certifications} renderItem={(certification:CertificationProps)=><Certification {...certification}/>}/>
      </>
    
  );
  
};

export default CertificationPage;
