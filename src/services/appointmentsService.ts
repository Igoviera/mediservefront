import { Appointments } from "@/types/Appointments";
import api from "./api"
import { Appointment } from "@/components/colmuns/appointments-clmns";


const getAllAppointments = (): Promise<Appointment[]> => {
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