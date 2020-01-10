import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <Link to="/">Sound Discus</Link>
                    </div>
                    <nav>
                        <Link to="/">Main</Link>
                        <Link to="/about">About</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
