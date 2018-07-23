import gql from 'graphql-tag';

const getTweets = profileName => gql`
    {
        twitter {
            user(identifier: name, identity: "${profileName}") {
                tweets(limit: 50) {
                    created_at
                    retweet_count
                }
            }
        }
    }
`;

export default getTweets;
