import Error from './Error';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', function() {
    it('renders the error message', function() {
        const component = shallow(<Error message="Something's wrong" />);
        expect(component).toMatchSnapshot();
    });
});
