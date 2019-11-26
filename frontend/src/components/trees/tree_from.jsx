import React from 'react';

class TreeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    let tree = {
      name: this.state.name
    };
    this.props.createTree(tree);
    this.setState({
      name: ''
    });
  };

  render() {
    return (
      <div>
        <div> Create a Tree </div>
        <form onSubmit={this.handleSubmit} className='creat-tree-form'>
          <input
            type='text'
            value={this.state.name}
            onChange={this.update('name')}
            placeholder='Tree Name'
            className='tree-form-input'
          />
          <input 
          className='tree-form-submit'
          type='submit'
          value='Create Tree'/>
        </form>
      </div>
    );
  }
};

export default TreeForm;