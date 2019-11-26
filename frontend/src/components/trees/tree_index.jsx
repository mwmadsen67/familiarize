import React from 'react'
import TreeIndexItem from './tree_index_item'
import TreeFormContainer from './tree_form_container';
import { Link } from 'react-router-dom';

class TreeIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    Promise.all([this.props.getTrees(), this.props.clearNodes()]);
  }
  
  render() {
    if (!this.props.trees) return null;
    const trees = Object.keys(this.props.trees).map(
      (id) => {
      return (
        <div key={id}>
          <TreeIndexItem
          tree={this.props.trees[id]}
          user={this.props.user}
          delete={this.props.deleteTree}
          update={this.props.updateTree}/>
        </div>
      )
    })
    return (
      <div>
        <h1>All The Trees</h1>
        {trees}
        <TreeFormContainer />
      </div>
    );
  }
};

export default TreeIndex;