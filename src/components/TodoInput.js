import React, { Component } from 'react'

export class TodoInput extends Component {
  render() {
    const {item, onChangeText, onSubmitText ,edit} = this.props;
    return (
      <div>
        <form onSubmit={onSubmitText}>
          <input type="text" placeholder="Enter item" onChange={onChangeText}/>
          <button type="submit" className={edit ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
          {edit? "edit item" : "add item"}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoInput
