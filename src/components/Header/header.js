import React from 'react';
import { Link } from 'react-router-dom';

import style from './header.css';

const Header = () => {

    const logo = () => {
        return (
            <Link to='/' className={style.logo}>
                <img alt="nba logo" src="/images/nba_logo.png"/>
            </Link>
        )
    }

    return (
        <header className={style.header}>
            <div className={style.headerOpt}>
                {logo()}
            </div> 
        </header>
    )
}

export default Header;