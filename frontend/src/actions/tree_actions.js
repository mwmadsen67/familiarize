import * as APIUtil from '../util/tree_api_util';

export const RECEIVE_TREE = "RECEIVE_TREE";
export const RECEIVE_TREES = "RECEIVE_TREES";
export const RECEIVE_TREE_ERRORS = 'RECEIVE_TREE_ERRORS';

export const receiveTree = tree => ({
  type: RECEIVE_TREE,
  tree
});

export const receiveTrees = trees => ({
  type: RECEIVE_TREES,
  trees
});

export const receiveTreeErrors = errors => ({
  type: RECEIVE_TREE_ERRORS,
  errors
});

export const createTree = tree => dispatch => (
  APIUtil.createTree(tree)
    .then((tree) => (dispatch(receiveTree(tree))),
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);

export const getTrees = () => dispatch => (
  APIUtil.getTrees()
    .then((trees) => (dispatch(receiveTrees(trees))),
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);

export const getTree = id => dispatch => (
  APIUtil.getTree(id)
    .then((tree) => (dispatch(receiveTree(tree))),
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);

export const updateTree = id => dispatch => (
  APIUtil.updateTree(id)
    .then((tree) => (dispatch(receiveTree(tree))),
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);

export const deleteTree = id => dispatch => (
  APIUtil.deleteTree(id)
    .then((tree) => (dispatch(receiveTree(tree))), 
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);

export const getUsersTrees = userId => dispatch => (
  APIUtil.getUsersTrees(userId)
    .then((trees) => (dispatch(receiveTrees(trees))), 
    (err) => (dispatch(receiveTreeErrors(err.response.data)))
    )
);