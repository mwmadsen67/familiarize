import {combineReducers} from "redux"
import sessionErrorsReducer from "./session_errors_reducer"
import treesErrorsReducer from "./trees_errors_reducer"
import nodeErrorsReducer from './node_errors_reducer'

const ErrorsReducer = combineReducers({
    session: sessionErrorsReducer,
    trees: treesErrorsReducer,
    nodes: nodeErrorsReducer
})

export default ErrorsReducer;