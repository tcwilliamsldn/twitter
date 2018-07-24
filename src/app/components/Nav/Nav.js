import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

const Nav = ({ location }) => {
    const { pathname } = location;

    // It was unclear what should be the 'home' link, as the tweets returned
    // by the API are the user's own tweets rather than a feed as in the
    // designs. For simplicity I switch to the tweet feed if the user is on
    // the stats page, or the stats page if the user is in the feed.

    const statsLink = pathname.includes('/stats')
        ? pathname
        : `${pathname.replace(/\/\s*$/, '')}/stats`;

    const homeLink = pathname.includes('/stats')
        ? pathname.replace('/stats', '')
        : pathname;

    return (
        <nav className={styles.nav}>
            <NavLink
                exact
                to={homeLink}
                className={styles.home}
                activeClassName={styles.active}
            >
                Home
            </NavLink>
            <NavLink
                exact
                to={statsLink}
                className={styles.stats}
                activeClassName={styles.active}
            >
                Stats
            </NavLink>
        </nav>
    );
};

export default Nav;
