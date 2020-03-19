import React from 'react';
import Graph from 'vis-react'
import NodeFormContainer from '../nodes/node_form_container';
import NodeItem from '../nodes/node_item';
import '../../styles/reset.scss';
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

  makeTree(){
    
    const graph = {
      nodes: [
        { id: 1, label: "Node 1", title: "node 1 tootip text" },
        { id: 2, label: "Node 2", title: "node 2 tootip text" },
        { id: 3, label: "Node 3", title: "node 3 tootip text" },
        { id: 4, label: "Node 4", title: "node 4 tootip text" },
        { id: 5, label: "Node 5", title: "node 5 tootip text" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 5, to: 1 },
        { from: 1, to: 5 },
        { from: 4, to: 5 },
        { from: 3, to: 5 },
      ]
    };

    const options = {
      layout: {
        hierarchical: false
      },
      edges: {
        color: "#000000"
      },
      height: "500px"
    };

    const events = {
      select: function (event) {
        var { nodes, edges } = event;
      }
    };

    return (
      <div>
        <Graph
          graph={graph}
          options={options}
          events={events}
          getNetwork={network => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
      </div>
    )
  }

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
        <div className='tree'>
        {nodes}
        </div>
        <div className='node-form'>
        <NodeFormContainer tree={this.state.tree}/>
        </div>
        </div>
    </div>
    )
  };
};

export default TreeShow;