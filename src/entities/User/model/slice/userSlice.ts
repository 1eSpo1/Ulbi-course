import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
