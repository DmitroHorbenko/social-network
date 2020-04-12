import React from "react";
import s from './Dilogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Message/Message";
import {sendMessageCreator, updateNewMessagesBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements =  props.dialogPage.dialogs.map((d) => <DialogItem name={d.name} id={d.id} status={d.status} avatar={d.avatar}/>)
    let messageElements =  props.dialogPage.messages.map((m) => <Messages message={m.message} id={m.id}/>)
    let newMessageBody = props.dialogPage.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessagesBodyCreator(body))
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
