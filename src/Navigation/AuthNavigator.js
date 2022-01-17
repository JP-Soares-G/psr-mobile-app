import React from 'react'
import {NavigationContainer} from  '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'

const Stack = createNativeStackNavigator()

export default props => {

    return (
        <NavigationContainer>

            <Stack.Navigator  screenOptions={{headerShown: false, animation: 'fade'}} >

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}