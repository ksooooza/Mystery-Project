import axios from 'axios';

let apiUrl;

const apiUrls = {
    production: "https://metmuseumapi-production.up.railway.app/museum/",
    development: "https://metmuseumapi-production.up.railway.app/museum/"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

const api = axios.create({
    baseURL : apiUrl
});

export default api;