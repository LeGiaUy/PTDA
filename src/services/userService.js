import { del, get, patch, post } from "../utils/request";

export const login = async(email,password) =>{
    const result = await get(`users?email=${email}&password=${password}`)
    
    return result.filter(user => user.phone_number === email && user.password === password);
}
export const register = async (options) =>{
    const result = await post(`users`, options)
    return result
}
export const checkExits = async (key,value) =>{
    const result = await get(`users?${key}=${value}`)
    return result
}

