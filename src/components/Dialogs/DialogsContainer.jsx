import React from "react";
// import s from './Dilogs.module.css'
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
debugger
    return <StoreContext.Consumer>
            {store => {
                // let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
                                dialogsPage={store.getState().dialogsPage}/>
            }}

        </StoreContext.Consumer>
}

export default DialogsContainer;
