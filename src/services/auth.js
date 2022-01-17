import axios from 'axios'
import { API_URL } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN_KEY = 'user'
// const API_URL = process.env.REACT_APP_API_URL

const login = (username, password) => {

    return axios.post(API_URL + "signin", {username, password})
        .then(res => {
            if(res.data.token){
                AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(res.data))
                // localStorage.setItem(TOKEN_KEY, JSON.stringify(res.data))
            }

            return res.data
        })
}

const googleLogin = (idToken) => {
    // console.log(idToken)
    return axios.post(API_URL + "tokensignin", {id_token: idToken})
        .then(res => console.log(res))
}

const logout = async () => {
    await AsyncStorage.removeItem(TOKEN_KEY)
}

const isAuthenticated = async () => {
    return await AsyncStorage.getItem(TOKEN_KEY) != null
}


const getUser = async () => {
    const user = await AsyncStorage.getItem(TOKEN_KEY)
    // console.log(JSON.parse(user))
    return await JSON.parse(user)
}


const authService = {
    login,
    googleLogin,
    logout,
    isAuthenticated,
    getUser
}

export default authService