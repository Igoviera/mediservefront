import api from "./api"
import {Doctor} from '@/types/Doctor';

const getAllDoctors = (): Promise<Doctor[]> => {
  return api
    .get('/api/mediServe/doctors?page=0&size=10&sort=name,asc')
    .then((res) => res.data.content);
};

export default {
  getAllDoctors,
};