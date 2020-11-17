import React from 'react'
import './Header.css'
import Avatar from '@material-ui/core/Avatar'
import AccessTimeIcon from '@material-ui/icons/Timer';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <div className="header">
                <div className="header__left">
                    <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu9ASfkG8cYsMC8voWrBP3lG76Rj06hW8yw9TtHvXA=s64-c-mo" alt="user" />
                    <AccessTimeIcon />
                </div>
                <div className="header__search">
                    <SearchIcon />
                    <input className="search__input" type="text" placeholder="Search Blume...." />
                </div>
                <div className="header__right">
                    <HelpOutlineIcon />
                </div>
        </div>
    )
}

export default Header
