import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper teal lighten-1 px1">
            <NavLink to="/" className="brand-logo">
                React + Typescript
            </NavLink>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/">To Do List</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </div>
    </nav>
)