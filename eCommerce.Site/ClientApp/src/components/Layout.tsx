import * as React from 'react';
import { Container } from 'reactstrap';
import Header from "./common/Header";
import Footer from "./common/Footer";
import '../styles/style.scss'

export default (props: { children?: React.ReactNode }) => (
    <React.Fragment>
        <Header/>
        <Container>
            {props.children}
        </Container>
        <Footer/>
    </React.Fragment>
);
