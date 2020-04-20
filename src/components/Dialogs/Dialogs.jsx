import React from "react";
import s from './Dilogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";

const Dialogs = (props) => {
    debugger
    let state = props.dialogsPage;

    let dialogsElements =  state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} status={d.status} avatar={d.avatar}/>)
    let messageElements =  state.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder={'Enter new message'}    >
                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick} >Send</button>
            </div>


        </div>

    );
}

export default Dialogs;
