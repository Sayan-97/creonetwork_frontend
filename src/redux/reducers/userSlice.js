import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userType: 'public' },
    reducers: {
        setUserType: (state, action) => {
            state.userType = action.payload;
        },
    },
});

export const { setUserType } = userSlice.actions;
export default userSlice.reducer;

