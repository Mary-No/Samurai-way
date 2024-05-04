import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': "234c9bba-18f8-4dd2-860f-665d9f96e11c"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0`
})

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`/profile/${userId}`)
    },
    getStatus(userId: string){
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put(`/profile/status`, {status})
    }

}

