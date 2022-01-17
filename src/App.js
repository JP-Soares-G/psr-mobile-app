
import React, {useEffect, useState} from 'react';
import {
    Alert,
   SafeAreaView,
   StatusBar,
   StyleSheet,
} from 'react-native';
import Dashboard from './screens/Dashboard';
// import Login from './screens/Login';
// import SignUp from './screens/SignUp';

import AuthNavigator from './Navigation/AuthNavigator';

import { useDispatch, useSelector } from 'react-redux'
import { autoLoginFromStorage } from './reducers/authSlice';
import { clearMessage } from './reducers/messageSlice';

const App = () => {
    const dispatch = useDispatch()
    const {isLogged, user} = useSelector(state => state.auth)
    const { title, message} = useSelector(state => state.message)

    useEffect(() => {
        dispatch(autoLoginFromStorage())
        // if(message && message.toString().trim()) {
        //     Alert.alert(title, message)
        //     dispatch(clearMessage())
        // }
        // console.log('Fui ativado')
    },[])

    useEffect(() => {
        if(message && message.toString().trim()) {
            Alert.alert(title, message)
            dispatch(clearMessage())
        }
    }, [message])
    
   return (
    <SafeAreaView style={{flex: 1}}>
        {
            !isLogged 
            ? <AuthNavigator />
            : <Dashboard />
        }
    </SafeAreaView>
   );
 };

 // #54A9E1, #FAFAF9, #37679C, #8DC5E9 cores
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});
 
 export default App;
 