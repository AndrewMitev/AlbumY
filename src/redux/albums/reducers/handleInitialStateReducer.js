import { loadInitialStateThunk } from "../thunks/loadInitialStateThunk";

const handleInitialStateReducer = builder => builder
        .addCase(loadInitialStateThunk.fulfilled, (state, action) => { 
            state.initialState = 'fulfilled'; 
            state.albums = action.payload.reduce( (acc, photo) => {
                if(!acc[photo.albumId]){
                    acc[photo.albumId] = [];
                }

                acc[photo.albumId].push(photo);
                return acc;
            }, {});
         })
        .addCase(loadInitialStateThunk.rejected, (state, action) => { state.initialState = 'rejected'; state.error = action.payload;});

export { handleInitialStateReducer };