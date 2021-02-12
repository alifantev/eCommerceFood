import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import './styles/style.scss'
import ProductMenu from "./screens/productMenu/ProductMenu";
import BonusActionsPage from "./screens/bonusActions/bonusActionsPage";
import DeliveryPage from "./screens/delivery/deliveryPage";
import ContactsPage from "./screens/contacts/ContactsPage";

export default () => (
    <Layout>
        <Route exact path='/' component={ProductMenu} />
        <Route exact path='/menu' component={ProductMenu} />
        <Route exact path='/bonusactions' component={BonusActionsPage} />
        <Route exact path='/delivery' component={DeliveryPage} />
        <Route exact path='/contacts' component={ContactsPage} />
        
        {/*<Route path='/fetch-data/:startDateIndex?' component={FetchData} />*/}
    </Layout>
);
