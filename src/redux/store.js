import { createStore, applyMiddleware } from 'redux'
import Root from './reducer'
import thunk from 'redux-thunk';



const store = createStore(Root,applyMiddleware(thunk))


export default store;