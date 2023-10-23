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
            console.log('este es', action.payload.data);
            return{
                token: action.payload.data.access_token,
                user: action.payload.data.email,
                localId: action.payload.data.localId,
            }
           
        },
        logoutt: (state, action) => {
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

export const { login, logoutt, setCameraImage } = userSlice.actions;

export default userSlice.reducer;