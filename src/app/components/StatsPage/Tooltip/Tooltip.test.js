import React from 'react';
import Tooltip from './Tooltip';
import { shallow } from 'enzyme';

describe('Tooltip', function() {
    const props = { date: 192837465, retweet_count: 'Tom' };

    it('renders a tooltip with correctly formatted date and retweet count', function() {
        const component = shallow(<Tooltip {...props} />);
        expect(component).toMatchSnapshot();
    });
});
