import axios from 'axios'

export const $client_req = axios.create({
	baseURL: process.env.API_CLIENT_HOST
})

export const $server_req = axios.create({
	baseURL: process.env.API_SERVER_HOST
})