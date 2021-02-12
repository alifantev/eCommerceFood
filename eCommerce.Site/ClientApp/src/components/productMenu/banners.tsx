import * as React from 'react';
import bannerImg from "../../content/img/banner_01.jpg";

export default class Banners extends React.Component<any, any>{
    
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="banner__body">
                        <img src={bannerImg}/>
                    </div>
                </div>
            </div>
        );
    }
}