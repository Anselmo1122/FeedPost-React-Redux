import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', name: "Fernando Alonso"},
    { id: '2', name: "María Palacios"},
    { id: '3', name: "Anselmo Del hoyo"},
]

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export default userSlice.reducer