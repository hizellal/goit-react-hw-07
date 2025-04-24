import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;

const filterSlice = createSlice({
    name: "filters",
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload.toLowerCase();
        },
    },
});
export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;