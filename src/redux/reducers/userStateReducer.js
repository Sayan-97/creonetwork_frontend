import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userState: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setClient(state, action){
            state.userState = {
                ...state.userState,
                role: 'client',
            }
        },
        setFreelancer(state, action){
            state.userState = {
                ...state.userState,
                role: 'freelancer',
            }
        },
        setPublic(state, action){
            state.userState = null;
        }
    }
})

export const { setClient, setFreelancer, setPublic } = userSlice.actions;
export default userSlice.reducer;
