import {quizDataConstants } from "../Constants";


export const addQuiz = (quizData) => {
    return  (dispatch) => {
        
            dispatch({ type: quizDataConstants.QUIZDATA_REQUEST });
            console.log("disssss",quizData);
            dispatch({
                type: quizDataConstants.QUIZDATA_SUCCESS,
                payload: quizData
            });
        }
        }
    

