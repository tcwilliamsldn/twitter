import React from 'react';
import styles from './Profile.css';
import Statistic from './Statistic/Statistic';
import enlargeImage from '../../../utils/enlargeImage';

const Profile = props => {
    const {
        screen_name,
        name,
        profile_image_url,
        tweets_count,
        followers_count,
        following
    } = props;

    return (
        <div className={styles.profile}>
            <div className={styles.banner} />
            <section className={styles.details}>
                <div className={styles.personal}>
                    <img
                        alt={`Profile picture of ${name}`}
                        className={styles.avatar}
                        src={enlargeImage(profile_image_url)}
                    />
                    <div className={styles.names}>
                        <h1>{name}</h1>
                        <h2>@{screen_name}</h2>
                    </div>
                </div>
                <div className={styles.stats}>
                    <Statistic title="Tweets" value={tweets_count} />
                    <Statistic title="Followers" value={followers_count} />
                    <Statistic title="Following" value={following} />
                </div>
            </section>
        </div>
    );
};

export default Profile;
