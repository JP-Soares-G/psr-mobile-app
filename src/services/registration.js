import axios from 'axios'
import { API_URL } from "@env"


const registerUser = (username, email, password) => {
    return axios.post(API_URL + "signup", {username, email, password})
    .then(res => {
        return res.data
    })
}


const registrationService = {
    registerUser
}

export default registrationService