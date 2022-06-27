import axios from "axios";

const instance = axios.create({
    baseURL: "http://...",
    headers: { a: 12 },
});

export default instance;
