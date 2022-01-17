import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../reducers/authSlice'
export default props => {
    const {user} = useSelector(state => state.auth)
    
    const dispatch = useDispatch()

    const logOut = async () => {
        if(GoogleSignin.isSignedIn) {
            try {
                await GoogleSignin.signOut()
            }catch(err) {
                console.log("[G-Logout]: Something unknown went wrong with Google sign in. " + err.message)
            }
        }
        
        dispatch(logout())
    }
    return (
        <View>
            <Text>{user?.email}</Text>
            <TouchableOpacity onPress={logOut} style={{backgroundColor: 'orange'}}>
                <Text>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    )
}