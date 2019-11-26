import { connect } from 'react-redux';
import TreeShow from './tree_show';
import { createNode } from '../../actions/node_actions'
import { getTree } from '../../actions/tree_actions';
import { getTreeNodes } from '../../actions/node_actions';

const MSP = (state, ownProps) => {
  const tree = (state.entities.trees) ? state.entities.trees[ownProps.match.params.treeId] : null;
  return ({
    tree: tree,
    nodes: state.entities.nodes
  });
};

const MDP = (dispatch) => {
  return ({
    getTree: (id) => dispatch(getTree(id)),
    createNode: (node) => dispatch(createNode(node)),
    getTreeNodes: (treeId) => dispatch(getTreeNodes(treeId))
  });
};

export default connect(MSP, MDP)(TreeShow);