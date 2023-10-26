import axios ,{AxiosInstance} from  "axios"


const instance : AxiosInstance = axios.create({
    baseURL : "https://api.weatherapi.com/v1/",
    headers : {
        'Content-Type' : 'apllication/jsonyes'
    }
})

export default instance