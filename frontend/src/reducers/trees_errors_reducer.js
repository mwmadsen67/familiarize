import { RECEIVE_TREE_ERRORS } from '../actions/tree_actions';

const _nullErrors = [];

const treesErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TREE_ERRORS:
      return action.errors;
    default:
      return state;
  };
};

export default treesErrorsReducer;