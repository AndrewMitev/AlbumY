import React, { useEffect } from 'react';
import Loading from './Loading';
import Rejected from './Rejected';
import { loadInitialStateThunk } from '../redux/albums/thunks/loadInitialStateThunk';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from './styles/Home.module.css';

import { useSelector } from 'react-redux';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialStateThunk());    
  }, [dispatch]);

  const initialState = useSelector(state => state.albumReducer.initialState);
  const error = useSelector(state => state.albumReducer.error);
  const albums = useSelector(state => Object.keys(state.albumReducer.albums));

  const albumsView = (<div>
    <h1 className={styles.heading}>Available Albums - AlbumY</h1>
    <h2>( ͡❛ ‿‿ ͡❛)</h2>
    <ul className={styles.container}>
    {albums.map(key => 
        <div key={key} className={styles.albumCover}>
            <Link to={ `/album/${key}` }>{key}</Link>
            <img src='./albums.png' alt='album' />
        </div>
    )}
</ul>
    </div>);


  return (<React.Fragment>
    { initialState === 'pending' && <Loading /> }
    { initialState === 'fulfilled' && albumsView }
    { initialState === 'rejected' && <Rejected error={error} /> }
  </React.Fragment>);
}

export default Home;
