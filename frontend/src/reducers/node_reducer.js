import { RECEIVE_NODES, RECEIVE_NODE, REMOVE_NODE } from '../actions/node_actions';

const nodeReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_NODES:
      action.nodes.data.map((node) => {
        newState[node._id] = node;
      });
      return newState;
    case RECEIVE_NODE:
      newState[action.node.data._id] = action.node.data;
      return newState;
    case REMOVE_NODE:
      delete newState[action.node.data._id]
      return newState;
    default:
      return state;
  };
};

export default nodeReducer;