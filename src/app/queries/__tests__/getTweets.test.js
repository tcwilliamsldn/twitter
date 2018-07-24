import getTweets from '../getTweets';

describe('getTweets', function() {
    it('creates gql query with users name', function() {
        const query = getTweets('tom');
        expect(query).toMatchSnapshot();
    });
});
