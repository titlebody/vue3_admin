import axios from 'axios';


let request =axios.create({
    baseURL: 'http://47.121.115.146:5001/api',
    timeout: 5000,
})

export default request;