import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.css';

const Nav = ({ location }) => {
    const { pathname } = location;

    const statsLink = pathname.includes('/stats')
        ? pathname
        : `${pathname}/stats`;

    const homeLink = pathname.includes('/stats')
        ? pathname.replace('/stats', '')
        : pathname;

    return (
        <nav className={styles.nav}>
            <NavLink to={homeLink} className={styles.home}>
                Home
            </NavLink>
            <NavLink to={statsLink} className={styles.stats}>
                Stats
            </NavLink>
        </nav>
    );
};

export default Nav;
