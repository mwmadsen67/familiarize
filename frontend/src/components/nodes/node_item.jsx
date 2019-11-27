import React from 'react';

const NodeItem = (props) => {
  const children = props.node.children.map(child => {
    return (
    <li>{child}</li>
    )
  })
  return <div className="node-item">{props.node.name}
  <ul>
    {children}
  </ul>
  </div>;

};

export default NodeItem;