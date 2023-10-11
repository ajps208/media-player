import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// uploading video
export const uploadVideo=async(body)=>{
    // call post http request to http://localhost:4000/videos to add video in json server return responses to Add component
    return await commonAPI("POST",`${serverURL}/videos`,body)
}

// get all videos
export const getAllVideos=async()=>{
    // call get http request to http://localhost:4000/videos to get video from json server return responses to View component
    return await commonAPI("GET",`${serverURL}/videos`,"")
}


// get a single video
export const getAVideo=async(id)=>{
    // call get http request to http://localhost:4000/videos to get  a video from json server return responses to VideoCard component
    return await commonAPI("GET",`${serverURL}/videos/${id}`,"")
}
// delete a single video
export const deleteVideo=async(id)=>{
    // call delete http request to http://localhost:4000/videos to remove  a video from json server return responses to VideoCard component
    return await commonAPI("DELETE",`${serverURL}/videos/${id}`)
}
// adding watch history to json server
export const addHistory=async(videoHistory)=>{
    // call post http request to http://localhost:4000/history to add video in json server return responses to videoComponent component
    return await commonAPI("POST",`${serverURL}/history`,videoHistory)
}
// geting watch history from json server
export const getHistory=async()=>{
    // call post http request to http://localhost:4000/history to add video in json server return responses to watchHistory component
    return await commonAPI("GET",`${serverURL}/history`,"")
}

// adding wcategory to json server
export const addCategory=async(body)=>{
    // call post http request to http://localhost:4000/categories to add video in json server return responses to categories component
    return await commonAPI("POST",`${serverURL}/categories`,body)
}
// geting category to json server
export const getAllCategory=async()=>{
    // call get http request to http://localhost:4000/categories to get video from json server return responses to categories component
    return await commonAPI("GET",`${serverURL}/categories`,"")}
    // delete a single category
export const deleteCategory=async(id)=>{
    // call delete http request to http://localhost:categories/videos to remove  a video from json server return responses to categories component
    return await commonAPI("DELETE",`${serverURL}/categories/${id}`)
}