import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': "234c9bba-18f8-4dd2-860f-665d9f96e11c"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0`
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}
export const followUser = (id: number) => {
    return instance.delete(`/follow/${id}`)
}
export const unfollowUser = (id: number) => {
    return instance.post(`/follow/${id}`)
}