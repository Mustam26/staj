import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    puser: false
}

const profileuser = createSlice({
    name: 'profileuser',
    initialState,
    reducers: {
        profile: (state, action) => {
            state.puser = action.payload
        }
    }
})

export const { profile } = profileuser.actions
export default profileuser.reducer