import getUser from '../getTweets';

describe('getUser', function() {
    it('creates gql query with users name', function() {
        const query = getUser('tom');
        expect(query).toMatchSnapshot();
    });
});
