const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = 8080; // In a production app, would make this configurable

const html = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Twitter</title>
        <meta name="description" content="The place to tweet">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="/assets/bundle.js"></script>
</html>
`;

app.use(compression()); // gzip
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// accept all requests and deal with routing in client
app.get('*', function(req, res) {
    res.type('html');
    res.status(200).send(html);
});

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
