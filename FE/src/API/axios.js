import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    // baseURL : "localhost:3000",
    baseURL : "https://628e3a84a339dfef87aa274a.mockapi.io/",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("TOKEN");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log('Axios Client: ', error);
});

export default axiosClient;