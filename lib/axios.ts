import axios from 'axios'

export const api = axios.create({
    baseURL: "https://note-school-server.vercel.app"
})