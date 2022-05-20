import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://transcriptor-en.herokuapp.com/api"
});