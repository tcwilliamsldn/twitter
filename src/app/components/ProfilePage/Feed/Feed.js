import React from 'react';
import Tweet from './Tweet/Tweet';
import styles from './Feed.css';

const Feed = ({ tweets }) => (
    <div className={styles.feed}>
        {tweets.map(props => <Tweet {...props} key={props.id} />)}
    </div>
);

export default Feed;
