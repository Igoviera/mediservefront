
import { AppointmentRequest } from "@/components/AppointmentDialog";
import api from "./api"


const getAllAppointments = (): Promise<AppointmentRequest[]> => {
  return api
    .get('/api/mediServe/appointments')
    .then((res) => res.data);
};

const creatAppointments = (appointment : AppointmentRequest): Promise<AppointmentRequest> => {
  return api
    .post('/api/mediServe/appointments', appointment)
    .then((res) => res.data);
};

const appointmentCancel = (id: String) => {
  return api.post(`/api/mediServe/appointments/${id}/cancel`)
  .then((res) => res.data);
}

const finishAppointment = (id: String) => {
  return api.post(`/api/mediServe/appointments/${id}/finish`)
  .then((res) => res.data);
}

export default {
    getAllAppointments,
    creatAppointments,
    appointmentCancel,
    finishAppointment
};