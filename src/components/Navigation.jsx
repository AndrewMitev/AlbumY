import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Favourites from './Favourites';
import Album from './Album';
import styles from './styles/Navigation.module.css';

const Navigation = () => {
    return <BrowserRouter>
        <div className={styles.sideMenu}>
            <nav>
                <NavLink to='/home' >Albums</NavLink>
                <NavLink to='/favourites' >Favourites</NavLink>
            </nav>
            <div />
            <div />
            <div />
        </div>
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/favourites' component={Favourites} />
            <Route path='/album/:id' component={Album} />
            <Route path='/' component={Home} />
        </Switch>
    </BrowserRouter>
}

export default Navigation;