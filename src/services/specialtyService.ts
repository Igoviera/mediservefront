import api from "./api"
import {Specialty} from '@/types/Specialty';


const creatSpecialty = (specialty: Specialty) : Promise<Specialty> => {
    return api
       .post('/api/mediServe/specialtys',specialty)
       .then((res) => res.data) 
}

const getAllSpecialty = (): Promise<Specialty[]> => {
  return api
    .get('/api/mediServe/specialtys')
    .then((res) => res.data);
};


export default {
  getAllSpecialty,
  creatSpecialty
};