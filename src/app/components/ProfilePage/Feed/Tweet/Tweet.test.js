import Tweet, { createMentionLinks } from './Tweet';
import React from 'react';
import { shallow } from 'enzyme';

describe('Tweet', function() {
    it('renders a Tweet', function() {
        const props = {
            text: 'Hello World',
            created_at: 'Fri Jul 20 02:17:02 +0000 2018',
            id: '123',
            user: {
                screen_name: 'tom',
                name: 'Tom',
                profile_image_url: 'http://example.com/image.jpg'
            }
        };

        const component = shallow(<Tweet {...props} />);
        expect(component).toMatchSnapshot();
    });
});

describe('createMentionLinks', function() {
    it('turns mentions into Links, that link to the mentioned users profile', function() {
        const text = 'Hello @person what a great day';
        const processedText = createMentionLinks(text);
        expect(processedText).toMatchSnapshot();
    });

    it('ignores @s in the middle of a word', function() {
        const text = 'H@ters gonna H@te';
        const processedText = createMentionLinks(text);
        expect(processedText).toMatchSnapshot();
    });

    it('ignores @s in the middle of a word and still adds valid links', function() {
        const text = 'H@ters gonna H@te @Tom';
        const processedText = createMentionLinks(text);
        expect(processedText).toMatchSnapshot();
    });

    it('leaves non-username trailing letters out of the link', function() {
        const text = '@Person! @Person? @Person, how are you? RT @Person: Link';
        const processedText = createMentionLinks(text);
        expect(processedText).toMatchSnapshot();
    });
});
