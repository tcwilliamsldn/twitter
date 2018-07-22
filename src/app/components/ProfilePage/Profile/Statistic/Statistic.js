import React from 'react';
import styles from './Statistic.css';

const Statistic = ({ title, value }) => (
    <div>
        <h3>{title}</h3>
        <div className={styles.value}>{value}</div>
    </div>
);

export default Statistic;
