import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.text

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        text: "",
    },
    reducers: {
        contactFilter: (state, action) => {
            state.text = action.payload.toLowerCase();
        },
    },
});
export const { contactFilter } = filterSlice.actions;
export default filterSlice.reducer;