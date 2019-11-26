import * as APIUtil from '../util/node_api_util';

export const RECEIVE_NODE = 'RECEIVE_NODE';
export const RECEIVE_NODES = 'RECEIVE_NODES';
export const REMOVE_NODE = 'REMOVE_NODE';
export const RECEIVE_NODE_ERRORS = 'RECEIVE_NODE_ERRORS';

export const receiveNode = node => ({
  type: RECEIVE_NODE,
  node
});

export const receiveNodes = nodes => ({
  type: RECEIVE_NODES,
  nodes
});

export const receiveNodeErrors = errors => ({
  type: RECEIVE_NODE_ERRORS,
  errors
});

export const removeNode = node => ({
  type: REMOVE_NODE,
  node
});

export const createNode = node => dispatch => (
  APIUtil.createNode(node)
    .then((node) => (dispatch(receiveNode(node))),
    (err) => (dispatch(receiveNodeErrors(err.response.data)))
    )
);

export const getTreeNodes = treeId => dispatch => (
  APIUtil.getTreeNodes(treeId)
    .then((nodes) => (dispatch(receiveNodes(nodes))), 
    (err) => (dispatch(receiveNodeErrors(err.response.data)))
    )
);

export const deleteNode = id => dispatch => (
  APIUtil.deleteNode(id)
    .then((node) => (dispatch(removeNode(node))), 
    (err) => (dispatch(receiveNodeErrors(err.response.data)))
    )
);

export const updateNode = id => dispatch => (
  APIUtil.updateNode(id)
    .then((node) => (dispatch(receiveNode(node))), 
    (err) => (dispatch(receiveNodeErrors(err.response.data)))
    )
);