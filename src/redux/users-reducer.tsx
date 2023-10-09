import React from 'react';
import {actionType, usersPageType} from './store';



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {
            id: "1",
            name: 'Andrey',
            lastname: 'Kovalski',
            date: '30.08.2002',
            location: {country: "Russia", city: 'Moscow'},
            followed: false,
            avatar: "https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
        },
        {
            id: "2",
            name: 'Dima',
            lastname: 'Pozow',
            date: '12.06.1998',
            location: {country: "Poland", city: 'Gdansk'},
            followed: true,
            avatar: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
        },
        {
            id: "3",
            name: 'Alla',
            lastname: 'Filatow',
            date: '14.06.2005',
            location: {country: "Belarus", city: 'Gomel'},
            followed: false,
            avatar: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
        },
        {
            id: "4",
            name: 'Nikolai',
            lastname: 'Kopot',
            date: '17.06.1975',
            location: {country: "Poland", city: 'Warsaw'},
            followed: false,
            avatar: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg"
        },
        {
            id: "5",
            name: 'Artem',
            lastname: 'Holet',
            date: '22.06.1996',
            location: {country: "German", city: 'Berlin'},
            followed: true,
            avatar: "https://imageio.forbes.com/specials-images/imageserve/61688aa1d4a8658c3f4d8640/Antonio-Juliano/0x0.jpg?format=jpg&width=960"
        },
        {
            id: "6",
            name: 'Dima',
            lastname: 'Zorow',
            date: '02.06.1993',
            location: {country: "France", city: 'Paris'},
            followed: false,
            avatar: "https://coinsutra.com/wp-content/uploads/2020/09/Konstantin-Gladych.webp"
        },
        {
            id: "7",
            name: 'Andrey',
            lastname: 'Kovalski',
            date: '30.08.2002',
            location: {country: "Russia", city: 'Moscow'},
            followed: false,
            avatar: "https://www.tu-ilmenau.de/unionline/fileadmin/_processed_/0/0/csm_Person_Yury_Prof_Foto_AnLI_Footgrafie__2_.JPG_94f12fbf25.jpg"
        },
        {
            id: "8",
            name: 'Dima',
            lastname: 'Pozow',
            date: '12.06.1998',
            location: {country: "Poland", city: 'Gdansk'},
            followed: false,
            avatar: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D"
        },
        {
            id: "9",
            name: 'Alla',
            lastname: 'Filatow',
            date: '14.06.2005',
            location: {country: "Belarus", city: 'Gomel'},
            followed: true,
            avatar: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
        },
        {
            id: "10",
            name: 'Alla',
            lastname: 'Filatow',
            date: '14.06.2005',
            location: {country: "Belarus", city: 'Gomel'},
            followed: true,
            avatar: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
        }
    ],
}


const usersReducer = (state: usersPageType = initialState, action: actionType) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            if(action.users){
                return {...state, users: [...state.users, ...action.users.users]}
            }
            return state;
        }

        default:
            return state;
    }

}
export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: usersPageType) => ({type: SET_USERS, users})
export default usersReducer;