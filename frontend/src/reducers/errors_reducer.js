import {combineReducers} from "redux"
import sessionErrorsReducer from "./session_errors_reducer"
import treesErrorsReducer from "./trees_errors_reducer"

const ErrorsReducer = combineReducers({
    session: sessionErrorsReducer,
    trees: treesErrorsReducer
})

export default ErrorsReducer