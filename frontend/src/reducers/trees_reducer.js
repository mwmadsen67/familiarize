import { RECEIVE_TREE, RECEIVE_TREES } from '../actions/tree_actions';

const treesReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TREE:
      return action.tree.data;
    case RECEIVE_TREES:
      return action.trees.data;
    default:
      return state;
  };
};

export default treesReducer;