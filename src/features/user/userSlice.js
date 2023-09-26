import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: false,
    user: null,
}


export const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.session = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.session = false;
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;