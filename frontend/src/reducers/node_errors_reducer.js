import { RECEIVE_NODE_ERRORS } from '../actions/node_actions';

const _nullErrors = [];

const nodeErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NODE_ERRORS:
      return action.errors;
    default:
      return state;
  };
};

export default nodeErrorsReducer;