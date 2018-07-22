import React from 'react';
import styles from './Error.css';

const Error = ({ message }) => (
    <div className={styles.error}>
        <h1>Error :(</h1>
        <p>{message}</p>
    </div>
);

export default Error;
