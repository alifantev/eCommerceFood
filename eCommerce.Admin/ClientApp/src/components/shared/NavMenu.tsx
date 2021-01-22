import React, { Component } from 'react';
import './NavMenu.css';

interface IProps {
    
}

export class NavMenu extends Component<{ } , any>{

    constructor (props: { }) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render () {
        return (
            <div>
                <h1>Dropdown Menu Demo</h1>
                <ul id="accordion" className="accordion">
                    <li>
                        <div className="link"><i className="fa fa-database"></i>Web Design<i
                            className="fa fa-chevron-down"></i></div>
                        <ul className="submenu">
                            <li><a href="#">Photoshop</a></li>
                            <li><a href="#">HTML</a></li>
                            <li><a href="#">CSS</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="link"><i className="fa fa-code"></i>Coding<i className="fa fa-chevron-down"></i>
                        </div>
                        <ul className="submenu">
                            <li><a href="#">Javascript</a></li>
                            <li><a href="#">jQuery</a></li>
                            <li><a href="#">Ruby</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="link"><i className="fa fa-mobile"></i>Devices<i
                            className="fa fa-chevron-down"></i></div>
                        <ul className="submenu">
                            <li><a href="#">Tablet</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">Desktop</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="link"><i className="fa fa-globe"></i>Global<i
                            className="fa fa-chevron-down"></i></div>
                        <ul className="submenu">
                            <li><a href="#">Google</a></li>
                            <li><a href="#">Bing</a></li>
                            <li><a href="#">Yahoo</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}