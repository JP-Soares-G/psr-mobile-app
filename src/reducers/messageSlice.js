import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        title: '',
        message: '',

    },
    reducers: {

        clearMessage: (state) => {
            state.title = ''
            state.message = ''
        }, 
        setMessage: (state, action) => {

            // console.log("AQUIII!!", action.payload)
            state.title = action.payload.title
            state.message = action.payload.message
        }
    }
})

export const {
    registerSucceedMessage, 
    registerFaieldMessage, 
    clearMessage, 
    setMessage 
} = messageSlice.actions

export default messageSlice.reducer