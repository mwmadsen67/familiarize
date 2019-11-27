import React from 'react';
import '../../styles/trees/tree_index.scss';

class TreeIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const tree = this.props.tree;
    this.props.delete(tree._id);
  }

  render() {

    const tree = this.props.tree;
    const user = this.props.user
    const button = (tree.creator === user) ? <input type='button' onClick={this.handleDelete} value="Delete Tree"/> : "";

  return (
    <div className='tree-index-item'>
      <a href={`#/tree/${tree._id}`}>{tree.name}</a>
      {button}
    </div>
    );
  };
};
export default TreeIndexItem;