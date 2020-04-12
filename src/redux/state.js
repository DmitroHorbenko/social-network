const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEST = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGES = 'ADD-MESSAGES'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', liksCount: 5},
                {id: 2, message: 'It\'s my first post', liksCount: 5}
            ],
            newPostText: "mutable"
        },

        dialogPage: {
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
      return this._state
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                liksCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGES) {
            let newMessage = {
                id: 6,
                message: this._state.dialogPage.newMessageBody
            };
            this._state.dialogPage.messages.push(newMessage)
            this._state.dialogPage.newMessageBody = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageBody = action.newBody;
            this._callSubscriber(this._state);
        }
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEST, newText: text})
export const sendMessageCreator = () => ({type: ADD_MESSAGES})
export const updateNewMessagesBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, newBody: body})

export default store;
