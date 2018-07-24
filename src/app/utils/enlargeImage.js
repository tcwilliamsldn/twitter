// The image returned from the GraphQL API was tiny, it appears
// that you can replace 'normal' with certain dimensions to get a resized image.

export default function enlargeImage(imageUrl) {
    return imageUrl.replace('normal', '200x200');
}
