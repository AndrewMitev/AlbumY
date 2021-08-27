import { useParams } from "react-router-dom";
import { albumActions } from "../redux/albums/albumSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useCallback } from 'react';
import styles from './styles/Album.module.css';

const Album = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [filterInput, setFilterInput] = useState('');

    const album = useSelector(state => state.albumReducer.albums[id]);
    const filtered = useSelector(state => state.albumReducer.filteredSelectedAlbum);
    const favourites = useSelector(state => state.albumReducer.favourites);
    const albumToUse = filterInput ? filtered : album;


    const filterAlbumsHandler = useCallback((event) => {
        setFilterInput(event.target.value);
        dispatch(albumActions.filterPhotos({ albumId: id, searchText: event.target.value}));
    }, [id, dispatch, setFilterInput]);

    const favouritePhotoHandler = useCallback((photo) => {
        dispatch(albumActions.favouritePhoto(photo));
    }, [dispatch]);

    return <div>
        <input className={styles.searchBar} type='text' onChange={filterAlbumsHandler} placeholder='Search image' value={filterInput} />
        <ul className={styles.container}>
            { albumToUse ?  albumToUse.length > 0 ? albumToUse.map(photo => 
            <li key={photo.id} className={styles.containerItem}> <img alt={photo.title} src={photo.url} className={styles.photo} />
                <div>{photo.title.substring(0, 6)}.. <button className={favourites.some(f => f.id === photo.id) ? styles.likeButtonLiked : styles.likeButton} onClick={() => favouritePhotoHandler(photo) } data={photo}>Like</button> </div>
            </li>) : <h3>No results found!</h3> 
            : <h3>Error</h3>}
        </ul>
    </div>
    
}

export default Album;