import gql from 'graphql-tag';

const getUser = profileName => gql`
    {
        twitter {
            user(identifier: name, identity: "${profileName}") {
                screen_name
                name
                profile_image_url
                tweets_count
                followers_count
                tweets(limit: 50) {
                    id
                    text
                    created_at
                    user {
                        screen_name
                        name
                        profile_image_url
                    }
                }
            }
        }
    }
`;

export default getUser;
