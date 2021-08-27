import { createAsyncThunk } from '@reduxjs/toolkit';

const loadInitialStateThunk = createAsyncThunk('initial state', async (_, { rejectWithValue }) => {
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(response.ok) {
            const data = await response.json();
            return data;
        }

        throw new Error(`Status: ${response.status} -> Request failed!`);
    } catch(error) {
        return rejectWithValue(error.message);
    }    
});

export { loadInitialStateThunk };