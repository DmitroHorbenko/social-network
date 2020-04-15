import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', liksCount: 5},
                {id: 2, message: 'It\'s my first post', liksCount: 5}
            ],
            newPostText: "mutable"
        },

        dialogsPage: {
            dialogs: [
                {
                    name: "Dima",
                    id: 1,
                    status: "active",
                    avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg'
                },
                {
                    name: "Julia",
                    id: 2,
                    status: "pass",
                    avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg'
                },
                {
                    name: "Anton",
                    id: 3,
                    status: "pass",
                    avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg'
                },
                {
                    name: "Darina",
                    id: 4,
                    status: "pass",
                    avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg'
                },
                {
                    name: "Baks",
                    id: 5,
                    status: "pass",
                    avatar: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg'
                }
            ],
            messages: [
                {message: "Haello", id: 1},
                {message: "How are you?", id: 2},
                {message: "LOL", id: 3},
                {message: "Like", id: 4},
                {message: "Gaf", id: 5}
            ]
            ,
            newMessageBody: ""
        },

        sidebar: {
            friends: [
                {name: "Julia", id: 2},
                {name: "Anton", id: 3}
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
    debugger;
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

export default store;
