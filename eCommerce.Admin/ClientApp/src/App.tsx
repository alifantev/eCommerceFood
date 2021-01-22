import React, {Component} from 'react';
import {Layout} from "./components/shared/Layout";
import {Product} from "./components/product/product";

export class App extends Component<{ }, {}>{
    
    render() {
        return (
            <div>
                <Layout>
                    <Product>Hello, world!</Product>
                </Layout>
            </div>
        );
    }
}

// export default function App()
// {
//     return <h1>Hello, world!</h1>
// }