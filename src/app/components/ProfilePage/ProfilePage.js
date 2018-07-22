import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import Profile from './Profile/Profile';
import Feed from './Feed/Feed';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import getUser from '../../queries/getUser';

export const ProfilePage = ({ loading, error, data }) => {
    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    const { tweets, ...restProps } = data.twitter.user;

    return (
        <Fragment>
            <Profile {...restProps} following={120} />
            <Feed tweets={tweets} />
        </Fragment>
    );
};

const ProfilePageWithData = ({ match }) => (
    <Query query={getUser(match.params.profileName)}>{ProfilePage}</Query>
);

export default ProfilePageWithData;
