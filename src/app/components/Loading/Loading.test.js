import Loading from './Loading';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', function() {
    it('renders the loading state', function() {
        const component = shallow(<Loading />);
        expect(component).toMatchSnapshot();
    });
});
