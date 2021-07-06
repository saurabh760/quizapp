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

        export const addQuizScore = (data) => {
            console.log("data->",data);
            return (dispatch) => {
                dispatch({
                    type: quizDataConstants.UPDATE_QUIZ_SCORE,
                    payload: data
                });
            }
        }
    

