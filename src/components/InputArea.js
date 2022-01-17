import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity as TO } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default props => {
    const [showPassword, setShowPassword] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    const currentBorderColor = {borderBottomColor: isFocused ? 'royalblue' : '#000'}
    
    

    const toggleShowPassword = () => setShowPassword(!showPassword)
    const setIsFocusedToTrue = () => setIsFocused(true)
    const setIsFocusedToFalse = () => setIsFocused(false)
    if(props.title === "Senha") {
        return (
            <View style={styles.inpWrapper}>
                <Text style={styles.inpLabel}>{props.title}</Text>
                <TextInput onBlur={setIsFocusedToFalse} onFocus={setIsFocusedToTrue} style={[styles.input, currentBorderColor]} secureTextEntry={!showPassword} {...props} />
                <TO style={styles.eye} onPress={toggleShowPassword}>
                    <Icon name={showPassword ? "eye" : "eye-off"} color="black" size={20}  />
                </TO>
            </View>
        )
    }

    return (
        <View style={styles.inpWrapper}>
            <Text style={styles.inpLabel}>{props.title}</Text>
            <TextInput onBlur={setIsFocusedToFalse} onFocus={setIsFocusedToTrue} style={[styles.input, currentBorderColor]} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    
    inpWrapper: {
        width: '100%',
        marginBottom: 32,
        position: 'relative'
    },
    inpLabel: {
        marginBottom: 2,
        color: '#000',
        fontFamily: 'Poppins-Medium'
    },
    input: {
        backgroundColor: '#FFF',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        fontFamily: 'Poppins-Regular'
    },
    eye: {
        position: 'absolute',
        bottom: 5,
        right: 0,
        // backgroundColor: 'yellow',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
        // marginBottom: '50%'
    }
}) 