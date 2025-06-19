import { Appointments } from "@/types/Appointments";
import api from "./api"


const getAllAppointments = (): Promise<Appointments[]> => {
  return api
    .get('/api/mediServe/appointments')
    .then((res) => res.data);
};

const creatAppointments = (appointment : Appointments): Promise<Appointments> => {
  return api
    .post('/api/mediServe/appointments', appointment)
    .then((res) => res.data);
};

export default {
    getAllAppointments,
    creatAppointments
};