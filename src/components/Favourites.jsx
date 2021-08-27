import { useSelector } from "react-redux";
import styles from './styles/Favourites.module.css';

const Favourites = () => {
    const favourites = useSelector(state => state.albumReducer.favourites);

    return <div>
        <h1 className={styles.heading}>Favourite photos</h1>
        <ul className={styles.container}>
            { favourites.length > 0 ? favourites.map(photo => <li key={photo.id} className={styles.item}> <img alt={photo.title} src={photo.thumbnailUrl} className={styles.image} />
            <div className={styles.description}>
                <span>Title: { photo.title }</span>
                <br />
                <span>ID: { photo.id }</span>
                <br />
                <span>Album: { photo.albumId }</span>
            </div>
                

              </li>) : <h3>No Favourite Photos!</h3> }
        </ul>
    </div>
}

export default Favourites;