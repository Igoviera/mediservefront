import { Diary } from "@/components/colmuns/diaryDoctor-colmns";
import api from "./api";

const getAllDiaryDoctor = (): Promise<Diary[]> => {
  return api.get("/api/mediServe/doctor-diary").then((res) => res.data);
};

export default {
  getAllDiaryDoctor,
};
