let state = {
    profilePage: {
        posts: [
            {message: 'Hi, how are you?', liksCount: 5},
            {message: 'It\'s my first post', liksCount: 5}
        ]
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
    },

    sidebar: {
        friends: [
            {name: "Julia", id: 2},
            {name: "Anton", id: 3}
        ]
    }

}

export default state;