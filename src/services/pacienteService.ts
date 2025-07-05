import { PatientFormData } from "@/components/PatientForm";
import api from "./api"
import {Patient} from '@/types/Patient';

const getAllPatients = (): Promise<Patient[]> => {
  return api
    .get('/api/mediServe/patients')
    .then((res) => res.data);
};

const createPatients = (data:PatientFormData): Promise<Patient> => {
  return api
    .post('/api/mediServe/patients',data)
    .then((res) => res.data);
};

const updatePatient = (id: number, data:PatientFormData): Promise<Patient> => {
  return api
  .put(`/api/mediServe/patients/${id}`,data)
  .then((res) => res.data);
}

export default {
  getAllPatients,
  createPatients,
  updatePatient
};