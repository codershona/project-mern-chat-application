import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:9000",
    baseURL: "https://matesapp-backend-app.herokuapp.com",
    
});

export default instance;
