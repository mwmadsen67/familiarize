import React from 'react'
import TreeIndexItem from './tree_index_item'
import TreeFormContainer from './tree_form_container';
import { Link } from 'react-router-dom';

class TreeIndex extends React.Component{
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.getTrees();
  }
  
  render() {
    if (!this.props.trees) return null;
    const trees = Object.keys(this.props.trees).map(
      (id) => {
      return (
        <div>
          <TreeIndexItem
          key={id}
          tree={this.props.trees[id]}/>
        </div>
      )
    })
    return (
      <div>
        <h1>Your Trees</h1>
        {trees}
        <TreeFormContainer />
        {/* <span>
          <Link to='/maketrees'>Create a Tree</Link> */}
        {/* </span> */}
      </div>
    );
  }
};

export default TreeIndex;