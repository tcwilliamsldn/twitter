import enlargeImage from './enlargeImage';

describe('enlargeImage', function() {
    it('changes image URL to request 200x200 image', function() {
        const originalUrl =
            'https://pbs.twimg.com/profile_images/983823904434196480/uua_n4Hv_normal.jpg';
        const enlargedUrl = enlargeImage(originalUrl);
        expect(enlargedUrl).toEqual(
            'https://pbs.twimg.com/profile_images/983823904434196480/uua_n4Hv_200x200.jpg'
        );
    });
});
