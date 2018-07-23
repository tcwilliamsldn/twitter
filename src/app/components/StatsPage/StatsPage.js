import React from 'react';
import { Query } from 'react-apollo';
import RetweetGraph from './RetweetGraph/RetweetGraph';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import getTweets from '../../queries/getTweets';

export const StatsPage = ({ loading, error, data }) => {
    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    const { tweets } = data.twitter.user;
    return <RetweetGraph tweets={tweets} />;
};

const StatsPageWithData = ({ match }) => (
    <Query query={getTweets(match.params.profileName)}>{StatsPage}</Query>
);

export default StatsPageWithData;
