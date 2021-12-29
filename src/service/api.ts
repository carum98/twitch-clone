import axios from 'axios'

const intance = axios.create({
    baseURL: 'http://localhost:3000/api',
    headers: {
        'Content-Type': 'application/json',
    },
})

intance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

intance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default intance
