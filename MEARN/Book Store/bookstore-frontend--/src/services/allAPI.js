// register - Auth Component

import commonAPI from "./commonApi"
import serverURL from "./serverURL"

// register Api - Called by Auth component when register btn clicked
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

// login Api - Called by Auth component when login btn clicked
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}

// google-login Api - Called by Auth component when google login btn clicked
export const googleloginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/google-login`,reqBody)
}

// user/add/book : add book api -called by sellBook when add book button is clicked
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/add/book`,reqBody,reqHeader)
}

// home books :/home/books - called when home page is loads
export const getHomepageBooksAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/home/books`,{})
}

// all-books : get request by books component when page loaded
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURL}/all-books?search=${searchKey}`,{},reqHeader)
}

// user-books : get request by books status when page loaded
export const getAllUserProfileBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books`,{},reqHeader)
}

// user-books : get request by purchase book when page loaded
export const getAllUserBoughtBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

// /user/:id/edit - put request by edit component when update btn clicked
export const editUserAPI = async  (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// /books/:id/view get request by view component when page loads
export const viewBookAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

// books/all : get request by admin collection component when loads
export const getAllAdminBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/books/all`,{},reqHeader)
}

// users/all : get request by admin collection component when loads
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/users/all`,{},reqHeader)
}

// /books/:id/update : put request by admin collection when approve btn clicked
export const updateBookStatusAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}

// /books/:id Delete request from book status when delete btn is clicked
export const deleteBookAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/books/${id}`,{},reqHeader)
}

// /books/:id/buy : PUT request by view when buy button clicked
export const bookPaymentAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/books/${id}/buy`,{},reqHeader)
}