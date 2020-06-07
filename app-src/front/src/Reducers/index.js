import { combineReducers } from "redux";
import UserReducer from './User';
import  TestsReducer  from './Tests';

let allReducers = combineReducers({
    UserReducer,
    TestsReducer
})

export default allReducers;
