import React from 'react';

const TreeIndexItem = (props) => {
  const tree = props.tree;
  return (
    <div>
      {tree.name}
    </div>
  )
};

export default TreeIndexItem;