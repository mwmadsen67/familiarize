import React from 'react';
import Graph from 'vis-react'
import '../../styles/reset.scss';
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
    const graph = {
      nodes: [
        { id: 1, label: "Node 1", title: "node 1 tootip text"},
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
  };
};
export default TreeIndexItem;