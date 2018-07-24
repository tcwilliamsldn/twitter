import RetweetGraph from './RetweetGraph';
import React from 'react';
import { shallow } from 'enzyme';

describe('RetweetGraph', function() {
    it('renders a loading state', function() {
        const tweets = [
            {
                created_at: 'Thu Jun 18 19:44:33 +0000 2009',
                retweet_count: 100
            },
            { created_at: 'Thu Jun 18 19:44:33 +0000 2009', retweet_count: 10 }
        ];

        const component = shallow(<RetweetGraph tweets={tweets} />);
        expect(component).toMatchSnapshot();
    });

    it('renders a retweet graph once library loaded', function() {
        const tweets = [
            {
                created_at: 'Thu Jun 18 19:44:33 +0000 2009',
                retweet_count: 100
            },
            { created_at: 'Thu Jun 18 19:44:33 +0000 2009', retweet_count: 10 }
        ];

        const ResponsiveXYFrame = jest.fn();
        const component = shallow(<RetweetGraph tweets={tweets} />);
        component.setState({ ResponsiveXYFrame });
        expect(component).toMatchSnapshot();
    });
});
