import axios from 'axios'

// export const apiClient = (token) =>{
//     return axios.create({
//         baseURL: "http://localhost:5000",
//         headers: token ? {Authorization: `Bearer ${token}` } : {}
//     })
// }

export const apiClient = axios.create({
    baseURL: "http://localhost:5000"
})

apiClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem("token")
    if(token) {
        config.headers.Authorization=`Bearer ${token}`
    }
    return config
})