import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../player/Player';

const Header: React.FC = () => {
    const setDataFromPlayer = React.useCallback((e)=> {
        console.log(e);
    }, [])

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
                <Player src="https://vk.com/doc2351807_488765951" setDataFromPlayer={setDataFromPlayer} />
            </div>
        </header>
    )
}

export default Header;
