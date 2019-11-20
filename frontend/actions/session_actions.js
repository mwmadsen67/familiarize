import * as APIUtil from "../../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const logoutUser = () => { 
    return({
        type: RECEIVE_CURRENT_USER
    })
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwtToken");

    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
}