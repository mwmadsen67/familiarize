import { connect } from 'react-redux';
import TreeShow from './tree_show';

const MSP = (state, ownProps) => {
  return ({
    tree: state.entities.trees[ownProps.match.params.treeId]
  });
};

const MDP = (dispatch) => {
  return ({

  });
};

export default connect(MSP, MDP)(TreeShow);