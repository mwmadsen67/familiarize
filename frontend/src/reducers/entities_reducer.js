import { combineReducers } from "redux";
import treesReducer from './trees_reducer';

const entitiesReducer = combineReducers({
  trees: treesReducer
});

export default entitiesReducer;