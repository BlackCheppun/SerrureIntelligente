import axios from "axios";

const baseURL = 'http://serrureintelligenteapi-production.up.railway.app';


const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': "application/json"
    },
});



export default axiosClient;