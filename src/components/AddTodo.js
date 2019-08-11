import React, { Component } from 'react';


class AddTodo extends Component {

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="add task..."
        />
        <input
        type="submit"
        value="Submit"
        />
    </form>
    )
  }
}



export default AddTodo;
