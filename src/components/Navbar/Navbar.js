import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import StoreContext from "../../StoreContext";

const Navbar = () => {
    debugger
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div> ------------------ </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div> ------------------ </div>
            <div>
                <StoreContext.Consumer>
                    {
                        store => {
                            let state = store.getState().sidebar
                            return <Sidebar friends={ state.friends} />
                        }
                    }

                </StoreContext.Consumer>
            </div>
        </nav>
    );
}

export default Navbar;
