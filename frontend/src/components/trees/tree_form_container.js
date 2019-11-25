import { connect } from 'react-redux';
import TreeForm from './tree_from';
import { createTree } from '../../actions/tree_actions';

const MSP = (state) => {
  return ({

  });
};

const MDP = (dispatch) => {
  return ({
    createTree: (tree) => dispatch(createTree(tree))
  });
};

export default connect(MSP, MDP)(TreeForm);