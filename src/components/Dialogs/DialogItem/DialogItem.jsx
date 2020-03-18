import React from "react";
import s from './../Dilogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    // let status = s.active;
    return <div className={s.dialog}>
        <NavLink to={"/dialogs/" + props.id} className={s.active}>
            <img src={props.avatar} alt='sdgdf'/>
            {props.name}
        </NavLink>
    </div>
}

export default DialogItem;