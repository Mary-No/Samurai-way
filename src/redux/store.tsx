import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export type PostDataType = {
    id: number,
    message: string,
    date: string,
    likeCount: number
}
export type dialogsDataType = {
    name: string,
    id: number
}
export type messagesDataType = {
    message: string,
    id: number
}
export type profilePageType = {
    posts: PostDataType[]
    newPostText: string
}

export type dialogsPageType = {
    dialogs: dialogsDataType[],
    messages: messagesDataType[],
    newMessageText: string
}
export type usersPageType = { users: userType[]}
export type userType = {
    id: string,
    name: string,
    lastname: string,
    date: string,
    location: { country: string, city: string },
    followed: boolean,
    avatar: string
}
export type stateDataType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType,
    usersPage: usersPageType
}
export type storeType = {
    _state: stateDataType,
    _callSubscriber: (state: stateDataType) => void,
    getState: () => void,
    rerenderEntireTree: () => void,
    dispatch: (action?: actionType) => void,
    subscribe: (observer: any) => void,

}
export type actionType = {
    type: string,
    newText?: string,
    newTextMessage?: string,
    userId?: string,
    users?: usersPageType
}


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', date: '30.08.2020', likeCount: 5},
                {id: 2, message: 'It\'s my first post', date: '12.06.2018', likeCount: 20}
            ],
            newPostText: ''
        },

        dialogsPage: {
            dialogs: [
                {name: 'Dima', id: 1},
                {name: 'Alex', id: 2},
                {name: 'Svetlana', id: 3},
                {name: 'Kate', id: 4}
            ],
            messages: [
                {message: 'Hi', id: 1},
                {message: 'how are you?', id: 2},
                {message: 'what do you do?', id: 3},
                {message: 'what\'s new?', id: 4}
            ],
            newMessageText: ''
        },
        usersPage: {
            users: [
                {
                    id: "1",
                    name: 'Andrey',
                    lastname: 'Kovalski',
                    date: '30.08.2002',
                    location: {country: "Russia", city: 'Moscow'},
                    followed: false,
                    avatar: "https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
                }
        ]
        }


    },
    _callSubscriber(state: stateDataType) {

        console.log(state)
    },
    getState() {
        return this._state
    },
    subscribe(observer: any) {

        this._callSubscriber = observer
    },

    dispatch(action: actionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}


export default store