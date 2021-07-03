
import userDataReducer from "./userData.reducer";
import quizDataReducer from "./Quizdata.reducer";
import { combineReducers } from 'redux';
import { quizDataConstants } from "../Constants";
const rootReducer = combineReducers({
    userData: userDataReducer,
    quizData: quizDataReducer
})
export default rootReducer;