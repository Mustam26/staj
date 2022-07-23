import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import profileuser from './profileuser'

const store= configureStore({
    reducer:{
        auth,
        profileuser
    }
})

export default store
