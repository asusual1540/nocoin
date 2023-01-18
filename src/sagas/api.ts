import axios from "axios"

export const server = axios.create({
    baseURL: 'http://127.0.0.1:5001/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'No Coin'}
})