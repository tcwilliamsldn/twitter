import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import App from './components/App/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './index.css';

// In a production app, would make this uri configurable
// to point app at prod/test APIs
const client = new ApolloClient({
    uri: 'https://www.graphqlhub.com/graphql'
});

render(
    <BrowserRouter>
        <ScrollToTop>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById('root')
);
