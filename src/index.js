import * as serviceWorker from './serviceWorker';
import state, {addPost, subscribe, updatePost} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePost={updatePost} />
        </BrowserRouter>, document.getElementById('root')
    );
}

subscribe(rerenderEntireTree)

rerenderEntireTree(state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
