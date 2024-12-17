// what is store?
// what store contains - collection of state
import {createStore} from 'redux'
import messageReducer from './message/message.reducer'
let store=createStore(messageReducer)

export default store;