import api from "./api"
import {Patient} from '@/types/Patient';

const getAllPatients = (): Promise<Patient[]> => {
  return api
    .get('/api/mediServe/patients')
    .then((res) => res.data);
};

const creatPatients = (): Promise<Patient> => {
  return api
    .get('/api/mediServe/patients')
    .then((res) => res.data.content);
};

export default {
  getAllPatients,
  creatPatients
};