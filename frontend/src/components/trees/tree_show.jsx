import React from 'react';
import NodeFormContainer from '../nodes/node_form_container';
import NodeItem from '../nodes/node_item';

class TreeShow extends React.Component {
  constructor(props) {
    super(props)
  }
  
    componentDidMount() {
    Promise.all([
      this.props.getTree(this.props.match.params.treeId),
      this.props.getTreeNodes(this.props.match.params.treeId)
    ]).then(() =>
      this.setState({
        tree: this.props.tree,
        tree: this.props.tree
      })
    );
  };

  render() {
    if (!this.state) return null;
    const nodes = Object.keys(this.props.nodes).map((id) => {
      return (
        <div key={id}>
          <NodeItem 
          node={this.props.nodes[id]}
          />
        </div>
      )
    })
    return (
      <div>
        <h1>{this.state.tree.name} Tree</h1>
        <NodeFormContainer tree={this.state.tree}/>
        <div>
        <h2>Nodes</h2>
        {nodes}
        </div>
      </div>
    )
  };
};

export default TreeShow;