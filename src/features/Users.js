import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice ({
    name: "users",
    initialState: {value: []},
    reducers: {
        addUser: (state, action) => {
                // code for adding user
        },
    },
});