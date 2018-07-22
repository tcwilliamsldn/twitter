import App from './App';
import React from 'react';
import { shallow } from 'enzyme';

describe('App', function() {
    it('renders the application', function() {
        const component = shallow(<App />);
        expect(component).toMatchSnapshot();
    });
});
