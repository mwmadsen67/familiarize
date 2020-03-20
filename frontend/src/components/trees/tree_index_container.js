import { connect } from 'react-redux';
import TreeIndex from './tree_index';
import { getTrees, getTree, updateTree, deleteTree } from '../../actions/tree_actions';
import { clearNodes } from '../../actions/node_actions';

const MSP = (state) => {
  return ({
    trees: state.entities.trees,
    user: state.session.user.id
  })
};

const MDP = (dispatch) => {
  return ({
    clearNodes: () => dispatch(clearNodes()),
    getTrees: () => dispatch(getTrees()),
    getTree: (id) => dispatch(getTree(id)),
    updateTree: (id) => dispatch(updateTree(id)),
    deleteTree: (id) => dispatch(deleteTree(id))
  })
};

export default connect(MSP, MDP)(TreeIndex);

