import React from 'react';
import s from "./NavBar.module.css"
import {Link, NavLink} from "react-router-dom";
export const NavBar = () => {
    let setActive=({isActive}:{isActive:boolean}) => (isActive ? s.active : s.nonactive)

    return (
        <div className={s.navbar}>
            <nav>
                <div className={s.item}>
                    <div><NavLink to={"/Profile"}
                                  className={({isActive}) => isActive ? s.active : s.nonactive}>Profile</NavLink></div>
                    <div><NavLink to={"/Dialogs"}
                                  className={({isActive}) => isActive ? s.active : s.nonactive}>Dialogs</NavLink></div>
                    <div><NavLink to={"/News"}
                                  className={({isActive}) => isActive ? s.active : s.nonactive}>News</NavLink></div>
                    <div><NavLink to={"/Music"}
                                  className={({isActive}) => isActive ? s.active : s.nonactive}>Music</NavLink></div>
                    <div><NavLink to={"/Settings"}
                                  className={({isActive}) => isActive ? s.active : s.nonactive}>Settings</NavLink></div>
                </div>
                {/*<div className={stylesNavBar.item}><a>Profile</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Messages</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>News</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Music</a></div>*/}
                {/*<div className={stylesNavBar.item}><a>Music</a></div>*/}
            </nav>
        </div>
    );
};

