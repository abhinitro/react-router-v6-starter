export function getUserDetails(payload){

    return {
        type:"USER_DETAILS", //event name
        payload   //data
    }
}


export function incrementOrdecrement(payload){

    return {
        type:"incrementOrdecrement",
        payload
    }
}