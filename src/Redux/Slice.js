import {createSlice} from '@reduxjs/toolkit'

export const Slice=createSlice({
    name:"user",
    initialState:{
     user:''
    },
    reducers:{
        Login:(state,action)=>{
            state.user=action.payload
        }
    }
})
export const {Login}=Slice.actions
export const selectUser=(state)=>state.user.user
export default Slice.reducer