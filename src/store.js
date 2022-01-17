import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import registrationReducer from './reducers/registrationSlice'
import messageReducer from './reducers/messageSlice'

export default configureStore({
    reducer: {
        auth: authReducer,
        registration: registrationReducer,
        message: messageReducer
    }
})