import { Doctor } from "@/components/colmuns/doctor-colmns";
import api from "./api";

const getAllDoctors = async (): Promise<Doctor[]> => {
  return await api
    .get("/api/mediServe/doctors?page=0&size=10&sort=name,asc")
    .then((res) => res.data.content);
};

const createDoctor = async (doctor: any) => {
  return await api.post("/api/mediServe/doctors", doctor).then((res) => res.data);
};

export default {
  getAllDoctors,
  createDoctor,
};
