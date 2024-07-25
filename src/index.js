import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const Link = "https://ap-south-1.cdn.hygraph.com/content/clww78g2h06c407te5js5mnyz/master" 

const client = new ApolloClient({
  uri: Link, 
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </ApolloProvider>,
);


