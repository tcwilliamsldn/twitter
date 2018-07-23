import React from 'react';
import { ResponsiveXYFrame } from 'semiotic';
import styles from './RetweetGraph.css';
import Tooltip from '../Tooltip/Tooltip';

const RetweetGraph = ({ tweets }) => {
    const totalRetweets = tweets.reduce(
        (total, current) => total + current.retweet_count,
        0
    );

    const coordinates = tweets.map(({ created_at, retweet_count }) => ({
        date: Date.parse(created_at),
        retweet_count
    }));

    return (
        <div className={styles.graph}>
            <div className={styles.infobar}>
                <h1>Retweets for your last 50 tweets</h1>
                <span>{`${totalRetweets} retweets`}</span>
            </div>
            <ResponsiveXYFrame
                size={[700, 300]}
                responsiveWidth={true}
                areas={[{ coordinates }]}
                xAccessor={'date'}
                yAccessor={'retweet_count'}
                areaStyle={{
                    fill: '#e0e9ff',
                    stroke: '#3c73ff',
                    strokeWidth: '2px'
                }}
                hoverAnnotation={[
                    { type: 'frame-hover', color: 'transparent' }
                ]}
                tooltipContent={props => <Tooltip {...props} />}
            />
        </div>
    );
};

export default RetweetGraph;
