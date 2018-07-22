import Profile from './Profile';
import React from 'react';
import { shallow } from 'enzyme';

describe('Profile', function() {
    const props = {
        screen_name: 'tom',
        name: 'Tom',
        profile_image_url: 'http://example.com/image.jpg',
        tweets_count: 123,
        followers_count: 123,
        following: 123
    };

    it('renders a users profile', function() {
        const component = shallow(<Profile {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('resizes the profile image when the image URL contains "normal"', function() {
        const component = shallow(
            <Profile
                {...props}
                profile_image_url="http://example.com/imagenormal.jpg"
            />
        );
        expect(component).toMatchSnapshot();
    });
});
