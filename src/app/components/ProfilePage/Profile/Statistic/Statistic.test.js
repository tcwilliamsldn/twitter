import Statistic from './Statistic';
import React from 'react';
import { shallow } from 'enzyme';

describe('Statistic', function() {
    it('renders a title and a value', function() {
        const component = shallow(<Statistic title="Stat" value={100} />);
        expect(component).toMatchSnapshot();
    });
});
