import { createSlice } from "@reduxjs/toolkit"

export const AuthSlice = createSlice({
    name: 'auth',
    initialSTate: {
        user: '',
        isLoggenIn: false,
    },
    reduers: {
        login(state, action){
            state.user = action.payload
            state.isLoggenIn = true
        },
        logout(state, action){
            state.user = ''
            state.isLoggenIn = false

        }
    }
})


export const {login, logout} = AuthSlice.actions

export const AuthReducer = AuthSlice.reduer