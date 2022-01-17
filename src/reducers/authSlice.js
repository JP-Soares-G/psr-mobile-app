import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth";
import { setMessage } from "./messageSlice";

// const user = async () => await authService.getUser()
// let user = null;
let initialState = {
    user: null,
    isLogged: false,
    isSuccess: false,
    isPending: false,
    isError: false
};

// const getUser = async () => {
//     user = await authService.getUser()
    
//     if(user) initialState = {
//             user,
//             isLogged: true,
//             isSuccess: false,
//             isPending: false,
//             isError: false
//     }

// }
// getUser()

export const autoLoginFromStorage = createAsyncThunk(
    'auth/autoLoginFromStorage',
    async () => {
        
        try {
            const user = await authService.getUser()
            if(!user) thunkAPI.rejectWithValue()
            return {user}
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const googleLogin = createAsyncThunk(
    'auth/googleLogin',
    async ({idToken}, thunkAPI) => {
        try {
            // await authService.googleLogin(idToken)
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}, thunkAPI) => {
        try {
            const data = await authService.login(username, password)
            return {user: data}
        } catch (err) {
            thunkAPI.dispatch(setMessage({title: "Login", message: 'Algo deu errado, verifique os dados inseridos e tente novamente.'}))
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await authService.logout()
    }
)





export const authSlice = createSlice({
    name: 'auth',

    initialState,

    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.isSuccess = true
            state.isError = false
            state.isPending = false
            state.isLogged = true
            console.log("[Auth]: succeed")

        },
        [login.pending]: (state) => {
            state.isSuccess = false
            state.isError = false
            state.isPending = true
            state.isLogged = false
            console.log("[Auth]: pending")
        },
        [login.rejected]: (state) => {
            state.isPending = false
            state.isSuccess = false
            state.isError = true
            state.isLogged = false
            console.log("[Auth]: Error")
        },
        [logout.fulfilled]: (state) => {
            state.isLogged = false
            state.user = null
            state.isPending = false
            state.isSuccess = false
            state.isError = false
            console.log("[Auth]: logged out")
        },
        [autoLoginFromStorage.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            state.isSuccess = true
            state.isError = false
            state.isPending = false
            state.isLogged = true
            console.log("[Auth]: succeed")

        },
        [googleLogin.fulfilled]: (state, {payload}) => {
            // state.user = payload.user
            // state.isSuccess = true
            // state.isError = false
            // state.isPending = false
            // state.isLogged = true
            console.log("[G. Auth]: succeed")

        },
        [googleLogin.pending]: (state) => {
            // state.isSuccess = false
            // state.isError = false
            // state.isPending = true
            // state.isLogged = false
            console.log("[G. Auth]: pending")
        },
        [googleLogin.rejected]: (state) => {
            // state.isPending = false
            // state.isSuccess = false
            // state.isError = true
            // state.isLogged = false
            console.log("[G. Auth]: Error")
        },
    },
})

// export const { logout } = authSlice.actions

export default authSlice.reducer