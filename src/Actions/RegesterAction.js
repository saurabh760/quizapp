import { loginConstants } from "../Constants";


export const signUp = (userData) => {
    return async (dispatch) => {
        try {
            dispatch({ type: loginConstants.LOGIN_REQUEST });
            dispatch({
                type: loginConstants.LOGIN_SUCCESS,
                payload: userData
            });
        } catch (e) {
            dispatch({ type: loginConstants.LOGIN_FAILED });
            console.log(e);
        }
    }
}