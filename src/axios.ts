import axios from "axios";

const baseURL = 'http://10.0.2.2:8000';


const axiosClient = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': "application/json"
    },
});



export default axiosClient;