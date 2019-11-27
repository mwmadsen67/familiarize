import React from 'react';
import NodeFormContainer from '../nodes/node_form_container';
import NodeItem from '../nodes/node_item';
import '../../styles/trees/tree_show.scss';

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
        nodes: this.props.nodes
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
    <div className='show-main'>
        <h1 className='show-title'>{this.state.tree.name} Tree</h1>
      <div className='show-body'>
        <div>
        <div>
        <h2>Nodes</h2>
        {nodes}
        </div>
        <NodeFormContainer tree={this.state.tree}/>
        </div>
      </div>
    </div>
    )
  };
};

export default TreeShow;