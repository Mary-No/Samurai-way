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
export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type profilePageType = {
    posts: PostDataType[]
    newPostText: string
    profile: UserProfileType
    status: string
}
export type dialogsPageType = {
    dialogs: dialogsDataType[],
    messages: messagesDataType[],
    newMessageText: string
}
export type usersPageType = {
    items: userType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}
export type userType = {
    name: string,
    id: number,
    photos: {
        small: string,
        large: string
    },
    status: string | null,
    followed: boolean
}
export type authType = {
    login: string,
    isAuth: boolean
}
export type actionType = {
    authPhoto: string,
    type: string,
    newText?: string,
    newTextMessage?: string,
    userId: number,
    items?: userType[],
    pageSize?: number,
    totalUsersCount?: number,
    currentPage?: number,
    isFetching?: boolean,
    profile: UserProfileType,
    data: authType,
    followingInProgress: Array<number>
    status: string
}