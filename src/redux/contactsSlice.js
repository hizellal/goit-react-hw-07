import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps"

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
		selectContacts: [],
    selectLoading: false,
    selectError: false, 
	},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.selectLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.selectLoading = false;
      state.selectError = false;
      state.selectContacts = action.payload;
    })
    .addCase(fetchContacts.rejected, (state) => {
      state.selectError = true;
      state.selectLoading = false;
    })
    .addCase(addContact.pending, (state) => {
      state.selectLoading = true;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.selectLoading = false;
      state.selectContacts.push(action.payload);
    })
    .addCase(addContact.rejected, (state) => {
      state.selectLoading = false;
      state.selectError = true;
    })
    .addCase(deleteContact.pending, (state) => {
      state.selectLoading = true;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.selectLoading = false;
      state.selectContacts = state.selectContacts.filter(
        (item) => item.id !== action.payload.id
      );
    });
  },
});

export default contactsSlice.reducer;