import axios from "axios";

const api = axios.create({
    baseURL:'https://apimediserve.onrender.com'
})

export default api;

