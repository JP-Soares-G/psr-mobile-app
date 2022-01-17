import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity as TO, ScrollView, Dimensions, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../components/Input'
import InputArea from '../components/InputArea'
import { signup } from '../reducers/registrationSlice'

const ToLoginScreenButton = (props) => {
    return (
        <View style={{flexDirection: 'row', width: '100%', marginBottom: 40, marginTop: 8}}>
            <Text style={{fontFamily: 'Poppins-Regular'}}>Já possui uma conta? faça </Text> 
            <TO onPress={() => props.navigation.navigate('Login')} >
                <Text style={{color: '#4169e1', fontFamily: 'Poppins-Bold'}}>login</Text>
            </TO>
        </View>
    )
}
// LIDAR COM OS ERROS
// CORRIGIR O BOTAO DE OCULTAR/EXIBIR SENHA
// ADICIONAR BORDERBOTTOM COLORIDO

export default props => {
    // const bdColor = { borderBottomColor: 'red', borderBottomWidth: 4, }
    const [username, setUsername] = useState("123")
    const [email, setEmail] = useState("123@example.com")
    const [password, setPassword] = useState("")
    // const { message } = useSelector(state => state.message)

    const dispatch = useDispatch()

    const submitRegister = () => {
        
        dispatch(signup({username, email, password}))
        // props.navigation.navigate('Login')
    }

    // console.log(Object.keys(props.navigation))

    // useEffect(() => {
    //     console.log(message)
    //     // alert(message)
    //     if(message !== '') Alert.alert('Cadastro', message)

    // }, [message])

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.scrollWrapper}>
                <View style={styles.smallContainer}>
                    <Text style={styles.title}>Cadastre-se</Text>
                    <ToLoginScreenButton {...props} />
                    
                    <InputArea value={username} onChangeText={setUsername} title="Username" placeholder="Digite seu nome de usuário" />
                    <InputArea value={email} onChangeText={setEmail} title="E-mail" placeholder='Digite seu E-mail' />
                    <InputArea value={password} onChangeText={setPassword} title="Senha" placeholder='digite sua senha' />
                    <TO onPress={submitRegister} style={{flexDirection: 'row'}}>
                        <View style={styles.btn} >
                            <Text style={styles.btnText}>Cadastrar</Text>
                        </View>
                    </TO>
                
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#37679C',
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
        
    },

    title: {
        marginTop: 40,
        width: '100%',

        fontSize: 25,
        fontFamily: 'Poppins-Bold',
        color: 'black',
        letterSpacing: -1,
    },
    
    btn: {
        backgroundColor: 'black',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 40,

        elevation: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins-Medium'
    }
}) 

// btn: {
    //     // width: '100%',
    //     backgroundColor: 'black',
    //     paddingVertical: 10,
    //     marginBottom: 20,
    //     marginVertical: 20,
    //     elevation: 4,
    //     // borderRadius: 20,
        
    // },