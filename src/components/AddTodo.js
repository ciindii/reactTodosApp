import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AddTodo extends Component {

  state = {
    title: ''
  }

  onChange = (e) => this.setState({title: e.target.value});

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: "flex"}}>
        <input
          type="text"
          name="title"
          onChange={this.onChange}
          style={{flex: "10", padding: "5px"}}
          placeholder="add task..."
        />
        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{flex: "1"}}
        />
    </form>
    )
  }
}

//PropTypes
// AddTodo.propTypes = {
//   addTodo: PropTypes.func.isRequired
// }

export default AddTodo;
