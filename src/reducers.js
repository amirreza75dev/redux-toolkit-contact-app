import { createSlice } from "@reduxjs/toolkit"
const contactState= [
    // {
    //     id: new Date().getTime(),
    //     name:"amir",
    //     number:"1124552",
    //     email:"email@gmail.com"
    // },
    // {
    //     id: new Date().getTime(),
    //     name:"mohammad",
    //     number:"425825",
    //     email:"mmm@gmail.com"
    // }




]
export const contactSlice = createSlice({
    name: 'contact',
    initialState: contactState,
    reducers: {
        contactUpdate : (state,action)=>state = [...state,action.payload] ,
        contactDelete : (state,action)=>state = [...action.payload] ,
        contacEdit : (state,action)=>state = [...action.payload] ,


    },
  })

export const {contactUpdate,contactDelete,contacEdit} = contactSlice.actions;
export default contactSlice.reducer;


