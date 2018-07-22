import Feed from './Feed';
import React from 'react';
import { shallow } from 'enzyme';

describe('Feed', function() {
    it('renders a users Tweets', function() {
        const tweet = {
            text: 'Hello World',
            created_at: 'Fri Jul 20 02:17:02 +0000 2018',
            id: '123',
            user: 'tom'
        };

        const component = shallow(
            <Feed tweets={[tweet, { ...tweet, id: '456' }]} />
        );

        expect(component).toMatchSnapshot();
    });
});
