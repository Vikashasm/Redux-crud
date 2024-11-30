import { fetchRequest,successFetch, failFetch } from "./productTypes"


export const requestProduct=()=>{
    return {
        "type":fetchRequest
    }
}


export const successProduct= (payload)=>{
    return {
        "type":successFetch,
        "payload":payload
    }
}

export const failProduct = (error)=>{
    return {
        "type":failFetch,
        "payload": error
    }
}