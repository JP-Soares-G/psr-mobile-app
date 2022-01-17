import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
// import { useDispatch } from "react-redux"
import registrationService from '../services/registration'
import { registerSucceedMessage, registerFaieldMessage, setMessage } from "./messageSlice"

// const dispatch = useDispatch()

export const signup = createAsyncThunk(
    'registration/signup',
    async ({username, email, password}, thunkAPI) => {
        try {
            await registrationService.registerUser(username, email, password)
            thunkAPI.dispatch(setMessage({title: 'Cadastro', message: 'Usuário cadastrado com sucesso'}))
        } catch (err) {
            
            thunkAPI.dispatch(setMessage({title: 'Cadastro', message: 'Algo deu errado, verifique os dados inseridos e tente novamente.'}))
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        isSuccess: false,
        isPending: false,
        isError: false
    },
    reducers: {
        clearStates: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isPending = false
        }
    },
    extraReducers: {
        [signup.fulfilled]: (state) => {
            state.isSuccess = true
            state.isPending = false
            state.isError = false
            console.log("Cadastrado com sucesso!");
        },
        [signup.pending]: (state) => {
            state.isSuccess = false
            state.isPending = true
            state.isError = false
            console.log("Pending...");
        },
        [signup.rejected]: (state) => {
            state.isSuccess = false
            state.isPending = false
            state.isError = true
            console.log("Algo deu errado!");
            // setMessage('Cadastro', 'Algo deu errado, verifique os dados inseridos e tente novamente.')
            // console.log("[Registration]: Error")
        }
    }
})

export const {clearStates} = registrationSlice.actions

export default registrationSlice.reducer