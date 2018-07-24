import { StatsPage } from './StatsPage';
import React from 'react';
import { shallow } from 'enzyme';

describe('StatsPage', function() {
    it('renders the loading state when loading', function() {
        const component = shallow(<StatsPage loading />);
        expect(component).toMatchSnapshot();
    });

    it('renders the error state on error', function() {
        const component = shallow(<StatsPage error={{ message: 'Whoops' }} />);
        expect(component).toMatchSnapshot();
    });

    it('renders a user Profile and Feed on success', function() {
        const data = { twitter: { user: { tweets: [] } } };

        const component = shallow(<StatsPage data={data} />);
        expect(component).toMatchSnapshot();
    });
});
