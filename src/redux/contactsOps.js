import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67fbed141f8b41c816854996.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const res = await axios.get('/contacts');
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const res = await axios.post('/contacts', newContact);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (taskId, thunkAPI) => {
    try {
        const res = await axios.delete(`/contacts/${taskId}`);
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})