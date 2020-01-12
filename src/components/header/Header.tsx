import React from 'react';
import { Link } from 'react-router-dom';
import Player from '../player/Player';
import { connect } from 'react-redux';

const Header: React.FC = (props: any) => {
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
                <Player src={props.audioSrc} setDataFromPlayer={setDataFromPlayer} />
            </div>
        </header>
    )
}

export default connect(state => state)(Header);
