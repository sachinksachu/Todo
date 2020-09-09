import React, { Component } from 'react'

export class TodoInput extends Component {
  render() {
    const {item, onChangeText, onSubmitText ,edit} = this.props;
    return (
      <div>
        <form onSubmit={onSubmitText}>
          <input type="text" placeholder="Enter item" onChange={onChangeText} className="m-2"/>
          <button type="submit" className={edit ? "btn btn-block btn-success m-auto col-5 col-sm-1"  : "btn btn-block btn-primary m-auto col-5 col-sm-1"}>
          {edit? "edit item" : "add item"}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoInput
