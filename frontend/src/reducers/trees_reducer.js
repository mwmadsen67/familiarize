import { RECEIVE_TREE, RECEIVE_TREES } from '../actions/tree_actions';

const treesReducer = (state = null, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TREE:
      newState[action.tree.data._id] = action.tree.data;
      return newState;
    case RECEIVE_TREES:
      action.trees.data.map(tree => {
        newState[tree._id] = tree;
      })
      return newState;
    default:
      return state;
  };
};

export default treesReducer;