import React from 'react';
import './Nav.scss';

import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>

                {/* <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>

                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink> */}
                <NavLink to="/symbol" activeClassName="active">
                    Symbol Search
                </NavLink>

                <NavLink to="/dictionary" activeClassName="active">
                    Dictionary
                </NavLink>

                <NavLink to="/photocompresser" activeClassName="active">
                    Photo Compresser
                </NavLink>

                <NavLink to="/calculator" activeClassName="active">
                    Calculator
                </NavLink>

                {/* <NavLink to="/weather" activeClassName="active">
                    Weather
                </NavLink> */}

                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </div>
        )
    }
}

export default Nav;