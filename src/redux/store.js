import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filtersSlice";
import contactSliceReducer from "./contactsSlice";

export const store = configureStore({
	reducer: {
		contacts: contactSliceReducer,
		filters: filterSlice,
	}
});
