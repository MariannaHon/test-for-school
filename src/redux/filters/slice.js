
import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
    title: '',
    description: '',
    name: '',
    email: '',
};

const filtersSlice = createSlice({
    name: "filters",
    initialState: filtersInitialState,
    reducers: {
        changeFilter(state, action) {
            state.title = action.payload;
            state.name = action.payload;
        },
    },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;