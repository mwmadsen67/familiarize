import React from 'react'
import TreeIndexItem from './tree_index_item'
import TreeFormContainer from './tree_form_container';
import '../../styles/trees/tree_index.scss'

class TreeIndex extends React.Component{

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
      <div className='tree-index-main'>
        <h1 className='tree-index-header'>All The Trees</h1>
        <div className='index-form'>
          <div className='index-container'>{trees}</div>
          <div className='tree-form-container'>
            <TreeFormContainer />
          </div>
        </div>
      </div>
    );
  }
};

export default TreeIndex;