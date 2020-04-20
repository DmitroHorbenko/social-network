import React from "react";
// import s from './Dilogs.module.css'
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
                 dialogsPage={state} />
    );
}

export default DialogsContainer;
