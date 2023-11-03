import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    localId: null,
    imageProfile: null,
    name: null,
    last_name: null,
    dni: null,
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('este es', action.payload.data);
            return{
                token: action.payload.data.access_token,
                user: action.payload.data.email,
                localId: action.payload.data.localId,
                name: action.payload.data.name,
                last_name: action.payload.data.lastName,
                dni: action.payload.data.dni,
                imageProfile: action.payload.data.image
            }
           
        },
        logoutt: (state, action) => {
            state.token = null;
            state.user = null;
            state.name = null;
            state.last_name = null;
            state.dni = null;
            imageProfile = null;
        },
        setCameraImage: (state, action) => {
             return {
                 ...state,
                 imageCamera: action.payload
             }
        }
    }
})

export const { login, logoutt, setCameraImage } = userSlice.actions;

export default userSlice.reducer;