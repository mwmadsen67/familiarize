import { connect } from 'react-redux';
import TreeIndex from './tree_index';
import { getTrees, getTree } from '../../actions/tree_actions';

const MSP = (state) => {
  return ({
    trees: state.entities.trees
  })
};

const MDP = (dispatch) => {
  return ({
    getTrees: () => dispatch(getTrees()),
    getTree: (id) => dispatch(getTree(id))
  })
};

export default connect(MSP, MDP)(TreeIndex);

