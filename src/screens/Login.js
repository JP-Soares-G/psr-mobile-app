import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity as TO, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
// import authService from '../services/auth'


import GoogleAuth from '../components/GoogleAuth'
import InputArea from '../components/InputArea'
import { login } from '../reducers/authSlice'

const ToSignupScreenButton = (props) => {
    return (
        <View style={{flexDirection: 'row', width: '100%', marginBottom: 40, marginTop: 8}}>
            <Text style={{fontFamily: 'Poppins-Regular',}}>Ainda não possui uma conta? </Text> 
            <TO onPress={() => props.navigation.navigate('SignUp')} >
                <Text style={{color: '#4169e1', fontFamily: 'Poppins-Bold',}}>Cadastre-se</Text>
            </TO>
        </View>
    )
}

export default props => {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const submitLogin = () => {
        dispatch(login({username, password}))
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.scrollWrapper}>
                <View style={styles.smallContainer}>
                    <Text style={styles.title}>Login</Text>
                    <ToSignupScreenButton {...props} />

                    <InputArea value={username} onChangeText={setUsername} title="E-mail" placeholder="Digite seu E-mail ou Username"/>

                    <InputArea value={password} onChangeText={setPassword} title="Senha" placeholder="Digite sua senha"/>
                    
                    <TO onPress={submitLogin} style={{flexDirection: 'row',}}>
                        <View style={styles.btn} >
                            <Text style={styles.btnText}>Entrar</Text>
                        </View>
                    </TO>

                    <Text style={styles.commomText}>Ou continue com</Text>

                    <GoogleAuth />

                </View>
                
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollWrapper: {
        width: '100%',
    },
    smallContainer: {
        width: '100%',
        maxWidth: 500,
        // paddingTop: 14,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },

    title: {
        width: '100%',
        // marginVertical: 40,
        marginTop: 40, 
        
        fontSize: 25,
        // fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        letterSpacing: -1,
        color: 'black',
    },
    
    btn: {
        backgroundColor: 'black',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 16,
        marginBottom: 16,
        elevation: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-Bold',
        letterSpacing: .5
    },

    commomText: {
        marginBottom: 15,
        marginTop: 20,

        fontFamily: 'Poppins-Regular',
        color: '#B5B5B5'
    }
}) 