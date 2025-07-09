import api from "./api";

const getDashboard = async () => {
  return await api.get("/api/mediServe/dashboard").then((res) => res.data);
};

export default {
  getDashboard,
};
