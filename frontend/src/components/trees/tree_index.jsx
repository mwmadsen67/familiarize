import React from 'react'

class TreeIndex extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTrees();
  }

  render() {
    if (!this.props.trees) return null;
    console.log(this.props);
    return (
      <div>
        This is the main page. . . Trees!!
      </div>
    );
  }
};

export default TreeIndex;