import axios from "axios";

const url = process.env.OPEN_WEATHER_API_KEY

const axiosInstance = axios.create({
    baseURL: url
})

export default axiosInstance;