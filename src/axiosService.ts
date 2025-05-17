import axios from "axios";

const BASE_URL = `${window.location.protocol}//${window.location.hostname}/api`;

const axiosService = axios.create({
    baseURL: BASE_URL,
    timeout: 30 * 1000,
});

export default axiosService;
