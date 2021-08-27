const albumReducer = {
    favouritePhoto: (state, action) => {
        if(!state.favourites.some(photo => photo.id === action.payload.id)) {
            state.favourites.push(action.payload);
        }
    },
    filterPhotos: (state, action) => {
        const filtered = state.albums[action.payload.albumId].filter(photo => photo.title.includes(action.payload.searchText));
        state.filteredSelectedAlbum = filtered;
    }
}

export default albumReducer;