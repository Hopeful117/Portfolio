import axios from 'axios';


const API = axios.create({
  baseURL: '/api/', 
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