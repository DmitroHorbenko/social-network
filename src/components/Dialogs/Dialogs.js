import React from "react";
import s from './Dilogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Julia</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Anton</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Darina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Baks</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Helol</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>LOL</div>
                <div className={s.message}>Like</div>
                <div className={s.message}>Gaf !</div>
            </div>
        </div>

    );
}

export default Dialogs;