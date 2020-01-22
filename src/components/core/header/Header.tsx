import React from 'react';
import { NavLink } from 'react-router-dom';
import Player from '../../core/player/Player';
import { connect } from 'react-redux';

const Header: React.FC = ({ audioSrc }: any) => {
    const setDataFromPlayer = React.useCallback((e)=> {
        console.log(e);
    }, [])

    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <NavLink to="/">Sound Discus</NavLink>
                    </div>
                    <nav>
                        <NavLink exact={true} activeClassName="is-active-link" to="/">Main</NavLink>
                        <NavLink exact={true} activeClassName="is-active-link" to="/about">About</NavLink>
                    </nav>
                </div>
                <Player src={audioSrc} setDataFromPlayer={setDataFromPlayer} />
            </div>
        </header>
    )
}

export default connect(state => state)(Header);
