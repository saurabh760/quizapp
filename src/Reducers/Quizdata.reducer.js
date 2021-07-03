
import { quizDataConstants } from "../Constants";


const initState = {
    quizData: []
}
export default (state = initState, action) => {
    switch (action.type) {
        
        case quizDataConstants.QUIZDATA_REQUEST:
            console.log("q212345");
            state = {
                ...initState
            }
            break;
        case quizDataConstants.QUIZDATA_SUCCESS:
            //state.quizData.push(action.payload)
            var newQuizData = state.quizData;
            newQuizData.push(action.payload)
            console.log("ashhjhjaska",newQuizData);
            state = {
                ...state,
                quizData: newQuizData
            }
            break;
    }
    return state;
};