import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
    name: 'user',
    initialState: {
       value : {
        token : undefined,
        firstName : undefined,
        lastName : undefined,
        image:undefined
    },
    },
    reducers: {
        loginUser: function(state, action){
            state.value = action.payload
          },
    },
})
export const {loginUser} = AuthSlice.actions

export default AuthSlice.reducer