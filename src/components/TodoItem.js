import React, { Component } from 'react'

export class TodoItem extends Component {
  render() {
    const {title, onTextEdit, onTextDelete, edit} = this.props;
    return (
      
      <div className=" m-2">
        <h5 className="text-primary">{title}</h5>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={onTextEdit}>Edit
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={onTextDelete}>Delete
            <i className="fas fa-trash" />
          </span>
        </div>
        </div>
      
    )
  }
}

export default TodoItem
