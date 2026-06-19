<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const ownerSlice=createSlice({
    name:"owner",
    initialState:{
        myShopData:null
    },
    reducers:{
        setMyShopData:(state,action)=>{
        state.myShopData=action.payload
        }
    }
})

export const {setMyShopData}=ownerSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";

const ownerSlice=createSlice({
    name:"owner",
    initialState:{
        myShopData:null
    },
    reducers:{
        setMyShopData:(state,action)=>{
        state.myShopData=action.payload
        }
    }
})

export const {setMyShopData}=ownerSlice.actions
>>>>>>> 8b99e06 (new project)
export default ownerSlice.reducer