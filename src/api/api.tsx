import axios from "axios";
import {profileAPI} from "./profileAPI";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': "234c9bba-18f8-4dd2-860f-665d9f96e11c"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0`
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(id: number) {
        return instance.delete(`/follow/${id}`)
    },
    unfollowUser(id: number) {
        return instance.post(`/follow/${id}`)
    },
    getProfile(userId: string){
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }

}
export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
    }
}
