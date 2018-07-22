import { ProfilePage } from './ProfilePage';
import React from 'react';
import { shallow } from 'enzyme';

describe('ProfilePage', function() {
    it('renders the loading state when loading', function() {
        const component = shallow(<ProfilePage loading />);
        expect(component).toMatchSnapshot();
    });

    it('renders the error state on error', function() {
        const component = shallow(
            <ProfilePage error={{ message: 'Whoops' }} />
        );
        expect(component).toMatchSnapshot();
    });

    it('renders a user Profile and Feed on success', function() {
        const data = { twitter: { user: { tweets: [], name: 'Tom' } } };

        const component = shallow(<ProfilePage data={data} />);
        expect(component).toMatchSnapshot();
    });
});
