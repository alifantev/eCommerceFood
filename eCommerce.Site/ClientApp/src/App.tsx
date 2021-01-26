import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';

import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './styles/style.scss'
import ProductMenu from "./components/productMenu/ProductMenu";

export default () => (
    <Layout>
        <Route exact path='/' component={ProductMenu} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </Layout>
);
