import axios from 'axios'
import { BaseUrl } from './url'

export const getRequest = (url,id=null)=>{
  
   if(id==null){
     return axios.get(`${BaseUrl}${url}`)
   }else{
     return axios.get(`${BaseUrl}${url}${id}`);
   }
}

export const PostRequest = (url,payload)=>{
  return axios.get(`${BaseUrl}${url}`,payload);
}
export const updateRequest = (url,payload)=>{
  return axios.patch(`${BaseUrl}${url}`,payload);
}
export const deleteRequest = (url,id)=>{
  return axios.delete(`${BaseUrl}${url}${id}`);
}


