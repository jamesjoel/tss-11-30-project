import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let addCartServer = createAsyncThunk("addcart", async(pro)=>{
    let response = await axios.post(`${import.meta.env.VITE_API_URL}/cart`, {productId : pro._id}, {headers : {Authorization : localStorage.getItem("user_access")}});
    return pro;
});
let addCartItemWithoutLoginServer = createAsyncThunk("addcart2", async({cartArr, token})=>{
    
    let response = await axios.post(`${import.meta.env.VITE_API_URL}/cart/itemwithoutlogin`, {cartArr} ,{headers : {Authorization : token}})
    // console.log(response.data)
    let cartArr2 = response.data.result;
    let temp = cartArr2.map(item=>{
        let pro = item.productId;
        pro.cartid = item._id
        return pro;
    })
    
    return temp;

})


let getAllByUserIdServer = createAsyncThunk("getall", async()=>{
    let response = await axios.get(`${import.meta.env.VITE_API_URL}/cart`, {headers : {Authorization : localStorage.getItem("user_access")}});
    // console.log(response.data)
    let cartArr = response.data.result;
    let temp = cartArr.map(item=>{
        let pro = item.productId;
        pro.cartid = item._id
        return pro;
    })
    
    return temp;
})

let removeItemServer = createAsyncThunk("remove", async(pro)=>{
    await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${pro.cartid}`, {headers : {Authorization : localStorage.getItem("user_access")}})
    return pro;
})  



let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addCart(state, action){
            state.push(action.payload)
        },
        removeOne(state, action){
            //console.log(action.payload)
            return state.filter(item=>item._id != action.payload._id);
        },
        removeAll(state, action){
            return [];
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(addCartServer.fulfilled, (state, action)=>{
            state.push(action.payload)
        });
        builder.addCase(getAllByUserIdServer.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(removeItemServer.fulfilled, (state, action)=>{
            return state.filter(item=>item.cartid != action.payload.cartid);
        })

    }
})
export {addCartServer, getAllByUserIdServer, removeItemServer, addCartItemWithoutLoginServer};
export let { addCart, removeOne, removeAll } = CartSlice.actions;
export default CartSlice.reducer;