import axios from 'axios';


let request =axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000,
})

export default request;