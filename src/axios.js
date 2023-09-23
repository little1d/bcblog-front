import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8088/'

if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http//:localhost:8090/api';} 
else if (process.env.NODE_ENV == 'debug') {    
    axios.defaults.baseURL = 'http//:localhost:8090/api';
} 
else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'http//:localhost:8090/api';
}

const request = axios.create({
    timeout: 5000,
    headers: {

    }
})

request.interceptors.request.use(config => {
    config.headers["token"] = localStorage.getItem("token")
    return config
})


request.interceptors.response.use(
    response => {
        console.log(response)
    },
    error=>{
        console.log(error)
        return Promise.reject(error)
    }
)

export default request;