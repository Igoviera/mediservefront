import { User } from "@/components/colmuns/user-columns";
import api from "./api";

const getAllUsers = (): Promise<User[]> => {
  return api.get("/api/mediServe/users").then((res) => res.data);
};

export default {
  getAllUsers,
};
