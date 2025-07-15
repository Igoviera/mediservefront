import { Diary } from "@/components/colmuns/diaryDoctor-colmns";
import api from "./api";

const getAllDiaryDoctor = async (): Promise<Diary[]> => {
  return await api.get("/api/mediServe/doctor-diary").then((res) => res.data);
};

const buscarAgendaPorMedico = async (id: string): Promise<Diary[]> => {
  return await api
    .get(`/api/mediServe/doctor-diary/${id}`)
    .then((res) => res.data);
};

const createDiaryDoctor = async (diary: Diary) => {
  return await api
    .post("/api/mediServe/doctor-diary", diary)
    .then((res) => res.data);
};

export default {
  getAllDiaryDoctor,
  createDiaryDoctor,
  buscarAgendaPorMedico,
};
