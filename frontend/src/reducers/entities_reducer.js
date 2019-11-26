import { combineReducers } from "redux";
import treesReducer from './trees_reducer';
import nodeReducer from './node_reducer';

const entitiesReducer = combineReducers({
  trees: treesReducer,
  nodes: nodeReducer
});

export default entitiesReducer;