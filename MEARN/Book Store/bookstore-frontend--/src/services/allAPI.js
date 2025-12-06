// register

import commonAPI from "./commonApi"
import serverURL from "./serverURL"

export const registerAPI = async (userDetailes)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}