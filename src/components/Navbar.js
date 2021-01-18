import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="nav-wrapper">
                    <ul id="nav-mobile" class="right">
                        <li><NavLink exact to="/" activeClassName="active">Box Shadow</NavLink></li>
                        <li><NavLink to="/border-radius" activeClassName="active">Border Radius</NavLink></li>
                        <li><NavLink to="/text-shadow" activeClassName="active">Text Shadow</NavLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;