import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:8000/api/', 
});

export const fetchProject = async () => {
  return await API.get("/projects/");
};


export const fetchCertification = async ()=>{
    return await API.get("/certifications/");
}

export const fetchSkill = async ()=>{
    return await API.get("/skills/");
}