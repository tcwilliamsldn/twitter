import React from 'react';
import styles from './Tooltip.css';

const Tooltip = ({ retweet_count, date }) => {
    const formattedDate = new Date(date).toLocaleString('en-gb', {
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={styles.tooltip}>
            <div className={styles.date}>{formattedDate}</div>
            <div className={styles.count}>{`${retweet_count} retweets`}</div>
        </div>
    );
};

export default Tooltip;
