// import React from "react";
// import s from './Dilogs.module.css'
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";

// const DialogsContainer = () => {
// debugger
//     return <StoreContext.Consumer>
//             {store => {
//                 // let state = store.getState().dialogsPage;
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//
//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 return <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange}
//                                 dialogsPage={store.getState().dialogsPage}/>
//             }}
//
//         </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
