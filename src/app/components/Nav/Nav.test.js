import Nav from './Nav';
import React from 'react';
import { shallow } from 'enzyme';

describe('Nav', function() {
    it('renders the nav', function() {
        const component = shallow(<Nav location={{ pathname: '/' }} />);
        expect(component).toMatchSnapshot();
    });

    it('renders the correct links in nav from stats page', function() {
        const component = shallow(
            <Nav location={{ pathname: '/test/stats' }} />
        );
        expect(component).toMatchSnapshot();
    });

    it('renders the correct links in nav from home page', function() {
        const component = shallow(<Nav location={{ pathname: '/test/' }} />);
        expect(component).toMatchSnapshot();
    });
});
