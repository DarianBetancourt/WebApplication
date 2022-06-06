import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://contacts-api.prd.parceirodaconstrucao.com.br'
})