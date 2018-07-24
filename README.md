# Twitter Clone

A twitter clone built using React and the GraphQLhub twitter endpoint.

This consists of:

-   a very small [node server](/src/server), that generates an html template and serves static assets.
-   a [React application](/src/app).

## Running the application with Docker

The easiest way to run this application is using Docker. With docker installed, run:

-   `docker build -t twitter .` to create a docker image, and then
-   `docker run -p <PORT>:8080 twitter` to serve the app at `http://localhost:<PORT>`.

The application inside the docker container is exposed on port 8080, and the `run` command above maps your local machine's `<PORT>` to that.

You can then visit a profile page at `http://localhost:<PORT>/<username>`, or the stats page at `http://localhost:<PORT>/<username>/stats`.

## Running the application without Docker

To run the node application on your local machine, follow these steps:

### Installation

This server was built using node version 8.11.1 as specified in the .nvmrc file. `nvm use` will set your node version to the correct version if you have nvm installed globally.

Install dependencies with `yarn` or `npm install`.

### Production Build

Build in production mode:
`yarn build` or `npm run build`.

You can then run the application with:
`yarn start` or `npm start`.

### Watch

Watch both the server and the client code in development mode:
`yarn watch` or `npm run watch`.

### Test

Run Jest tests with code coverage check:
`yarn test` or `npm run test`.

## Comments

This codebase contains some extra comments to explain some decisions that I made during this task. Here are some general points:

-   50 tweets can be a little slow to return from the API, but it didn't support pagination.
-   Not all usernames that are @'d are returned from the API, which results in an error page.
-   I initially used polyfill.io to support IE11, but I then had issues on IE11 with the data visualisation library as well. I took out polyfill.io because it was render blocking for the other browsers that didn't need it and dropped IE11 support.
-   There's no proptype validation or typechecking - I'd include this on a larger project.

A couple of things I'd add/fix with longer to spend on the project:

-   Sometimes the area fill on the stats graph doesn't reach the baseline, if the user doesn't have tweets with 0 retweets. A fix could be manipulating start/end values and rendering separate area/line graphs.
-   I don't think that using D3 with React would be a good fit if this project were to go into production - I'd re-evaluate using a much more lightweight library to render a line graph, and then introduce D3 again if we were
    going to be rendering a lot of complex visualisations.
-   I'd make use of CSS variables for colours, media queries etc (or potentially CSS Blocks or a CSS-in-JS approach), and extract the CSS from the head into a seperate CSS file using webpack.
