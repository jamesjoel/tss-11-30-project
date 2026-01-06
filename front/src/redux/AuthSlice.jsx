import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

let AuthSlice = createSlice({
    name : "auth",
    initialState : false,
    reducers : {
        isLoggedIn(){
            return true;
        },
        isLoggedOut(){
            return false;

        }
    }
})

export let {isLoggedIn, isLoggedOut} = AuthSlice.actions;
export default AuthSlice.reducer;