import React, { Component } from 'react'
import TodoItem from './TodoItem'
export class TodoList extends Component {
  render() {
    const { items, onTextEdit, onTextDelete , clearList } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
          items.map((itm) =>{
            return(
              <TodoItem
                key = {itm.id}
                title = {itm.title}
                onTextEdit ={() => onTextEdit(itm.id)}
                onTextDelete={() => onTextDelete(itm.id)}

              />
            );
          })
        }
        </ul>
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </div>
    )
  }
}

export default TodoList
