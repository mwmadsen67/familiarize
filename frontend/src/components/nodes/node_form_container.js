import { connect } from 'react-redux';
import NodeForm from './node_form';
import { createNode, getTreeNodes} from '../../actions/node_actions';
import { get } from 'mongoose';

const MSP = (state, ownProps) => {
  return ({

  });
};

const MDP = (dispatch) => {
  return ({
    createNode: (node) => dispatch(createNode(node)),
    getTreeNodes: (treeId) => dispatch(getTreeNodes(treeId))
  });
};

export default connect(MSP, MDP)(NodeForm)