import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    localId: null,
    imageCamera: null,
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log('este es', action);
            return{
                token: action.payload.idToken,
                user: action.payload.email,
                localId: action.payload.localId,
            }
           
        },
        logout: (state, action) => {
            state.token = null;
            state.user = null;
        },
        setCameraImage: (state, action) => {
            return {
                ...state,
                imageCamera: action.payload
            }
        }
    }
})

export const { login, logout, setCameraImage } = userSlice.actions;

export default userSlice.reducer;