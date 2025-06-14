import axios from "axios";

const apiProducao = 'https://apimediserve.onrender.com';
const apiDesenvolvimento = 'http://localhost:8080'

const api = axios.create({
    baseURL: apiDesenvolvimento
})

export default api;

