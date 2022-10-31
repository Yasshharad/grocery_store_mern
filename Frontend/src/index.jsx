import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Provider store={store}>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </Provider>
    </Router>
);
