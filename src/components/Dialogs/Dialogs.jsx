import React from "react";
import s from './Dilogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =  props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} status={d.status} avatar={d.avatar}/>)
    let messageElements =  props.state.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    
    let newPostElement = React.createRef();

    let addMessage = () => {
        let newMessage = newPostElement.current.value;
        alert(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <textarea ref={newPostElement} ></textarea>
            <button onClick={addMessage} >Add</button>
        </div>

    );
}

export default Dialogs;