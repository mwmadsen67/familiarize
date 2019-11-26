import { connect } from 'react-redux';
import TreeForm from './tree_from';
import { createTree,  getTrees} from '../../actions/tree_actions';

const MSP = (state) => {
  return ({

  });
};

const MDP = (dispatch) => {
  return ({
    createTree: (tree) => dispatch(createTree(tree)),
    getTrees: () => dispatch(getTrees())
  });
};

export default connect(MSP, MDP)(TreeForm);