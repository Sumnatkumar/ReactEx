import { combineReducers } from "redux";

import messageReducer from "./message/message.reducer";
import counterReducer from "./counter/counter.reducer";
let rootReducer = combineReducers({message:messageReducer,counter:counterReducer})
export default rootReducer