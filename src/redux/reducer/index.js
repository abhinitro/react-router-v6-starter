import { combineReducers } from 'redux';


import Auth from './userReducer'
import Contact from './contact';


const Root =combineReducers({
    Auth,
    Contact

})

export default Root;