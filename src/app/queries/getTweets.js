// These queries could also probably have stayed colocated with the component
// that uses them, and then broken out into fragments if the codebase
// grew larger.

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
