import React from "react";
import s from './Sidebar.module.css'

const Sidebar = (props) => {
    console.log(props)
    return (
        <div>
            <div className={s.friends}>
                Friends:
                {props.friends.map( f => <div>{f.name}</div>) }
            </div>
        </div>
    );
}

export default Sidebar;