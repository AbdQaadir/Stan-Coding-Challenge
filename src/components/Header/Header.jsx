import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
const Header = ({title}) => {
    return (
        <>
            <div id="header-1">
                <div className="wrapper">
                    <div className="col-1">
                        <h1>DEMO Streaming</h1>
                    </div>
                    <div className="col-2">
                        <Link to="/login">Login</Link> 
                        <button className="trial-btn">Start your free trials</button>
                    </div>
                </div>
            </div>
            <div id="header-2">
                <div className="wrapper">
                    <h2>Popular {title}</h2>
                </div>
            </div>
        </>
    )
}

export default Header
