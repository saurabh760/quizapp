
import { quizDataConstants } from "../Constants";


const initState = {
    quizData: []
}
const det = (state = initState, action) => {
    switch (action.type) {
        
        case quizDataConstants.QUIZDATA_REQUEST:
            // console.log("q212345");
            state = {
                ...initState
            }
            break;
        case quizDataConstants.QUIZDATA_SUCCESS:
            var newQuizData = state.quizData;
            newQuizData.push(action.payload)
            // console.log("ashhjhjaska",newQuizData);
            state = {
                ...state,
                quizData: newQuizData
            }
            break;
            case quizDataConstants.UPDATE_QUIZ_SCORE:
            var currentState = state.quizData;
            // console.log("curr->", currentState);
            // console.log(action.payload);
            currentState.map((item, index) => {
                if (index === action.payload.quizIndex) {
                    item.quizScore = action.payload.score
                }
                return true
            });
            console.log("updated",currentState);
            state = {
                ...state,
                quizData: currentState
            }
            break;
            default:return state;
            
    }
    return state
};
export default det;