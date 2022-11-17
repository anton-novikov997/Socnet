import React from 'react';
import stylesNavBar from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <div className={stylesNavBar.navbar}>
            <nav>
                <div className={stylesNavBar.item}>
                    <div><a>Profile</a></div>
                    <div><a>Messages</a></div>
                    <div><a>News</a></div>
                    <div><a>Music</a></div>
                    <div><a>Settings</a></div>
                </div>
                {/*<div className={stylesNavBar.item}><a>Profile</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Messages</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>News</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Music</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Settings</a></div>*/}
            </nav>
        </div>
    );
};

