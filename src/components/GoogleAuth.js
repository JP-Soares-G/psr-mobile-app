import React, {useEffect, useState} from 'react'
import {
    TouchableOpacity as TO,
    Image,
    StyleSheet,
    View
} from 'react-native'
import {useDispatch} from 'react-redux'
import {GoogleSignin, statusCodes, GoogleSigninButton} from '@react-native-google-signin/google-signin'
import { GOOGLE_CLIENT_ID } from "@env"

import {googleLogin, login} from '../reducers/authSlice'
export default props => {
    // const [data, setData] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: GOOGLE_CLIENT_ID,
            // androidClientId: '635251423801-hq06q40bpg6r79tj069mstvp7qtcvbl9.apps.googleusercontent.com'
        })
    }, [])

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices()
            const userInfo = await GoogleSignin.signIn()
            const idToken = userInfo.idToken
            // console.log(userInfo)
            dispatch(googleLogin(idToken))
        } catch(err) {
            if(err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) alert("Something unknown went wrong with Google sign in. " + err.message)
        }
    }

    return (
        <GoogleSigninButton  onPress={signIn} style={{width: '90%', marginBottom: 30}} size={1} />
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#D2D2CF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40
    }
})