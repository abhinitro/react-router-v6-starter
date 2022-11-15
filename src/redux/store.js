import { createStore, applyMiddleware } from 'redux'
import Root from './reducer'



const store = createStore(Root)


export default store;