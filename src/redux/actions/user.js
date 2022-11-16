import axios from "axios"



/***
 * Sync - Wait line by line
 * Asyn-Do not wait for process
 * 
 * Redux====>useSelector= fetch the value from redux stroee
 * 
 * Provider=wrap parent component store=stro
 * 
 * action it's a plain object which contains event name and payload and call redducer method
 * 
 * reducer update the state and return new object 
 * 
 *
 * 
 */
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




