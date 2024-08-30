import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    food: [],
    search: ""
};

export const foodSlice = createSlice({
    name: "Food",
    initialState: initialState,
    reducers: {
        setFood: (state, action) => {
            state.food = action.payload;
        },
        setSearchFood: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { setFood, setSearchFood } = foodSlice.actions;
export const foodReducer = foodSlice.reducer;
