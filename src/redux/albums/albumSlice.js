import { createSlice } from "@reduxjs/toolkit";
import albumReducer from "./reducers/albumReducer";
import { handleInitialStateReducer } from "./reducers/handleInitialStateReducer";

const initialState = {
    initialState: 'pending',
    error: '',
    filteredSelectedAlbum: [],
    albums: [],
    favourites: []
}

const albumSlice = createSlice({
    name: 'albumsY',
    initialState,
    reducers:  albumReducer,
    extraReducers: handleInitialStateReducer
});

export const { actions:albumActions } = albumSlice;

export default albumSlice;