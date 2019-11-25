import React from 'react'
import TreeIndexItem from './tree_index_item'
import TreeFormContainer from './tree_form_container';

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


    const trees = this.props.trees.map((tree, idx) => {
      return (
        <div>
          <TreeIndexItem
          key={idx}
          tree={tree}/>
          <TreeFormContainer />
        </div>
      )
    })
    return (
      <div>
        <h1>Your Trees</h1>
        {trees}
      </div>
    );
  }
};

export default TreeIndex;