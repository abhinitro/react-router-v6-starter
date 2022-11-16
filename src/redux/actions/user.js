import axios from "axios"


export function getUserDetails(payload){


    return function(dispatch){
     axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
             setTimeout(()=>{
                return dispatch({
                    type:"USER_DETAILS", //event name
                    payload:response.data   //data
                })
             },100)
           
        })

      


    }

    



   
}


export function incrementOrdecrement(payload){

    return {
        type:"incrementOrdecrement",
        payload
    }
}




