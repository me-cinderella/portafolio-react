import React from 'react';
import Logo from '../../assets/logo/logo.png';

function CustomHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="logo">
                <a className="navbar-brand" href="/">
                    <img 
                        src={Logo} 
                        className="d-inline-block align-top" 
                        alt="nintendo logo" 
                    />
                </a>
            </div>
        </nav>
    )
}

export default CustomHeader;