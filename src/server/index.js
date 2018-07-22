const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

const html = `
<!DOCTYPE html>
<html>
    <head>
        <title>Twitter</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    <script src="/assets/bundle.js"></script>
</html>
`;

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('*', function(req, res) {
    res.type('html');
    res.status(200).send(html);
});

app.listen(PORT, () => {
    console.log(`Server Listening on ${PORT}`);
});
