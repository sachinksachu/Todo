import React, { Component } from 'react'
import TodoItem from './TodoItem'

function compare_id(a, b){
        // a should come before b in the sorted order
        if(a.id < b.id){
                return -1;
        // a should come after b in the sorted order
        }else{
                return 1;
        // a and b are the same
        }
}
export class TodoList extends Component {

	
  render() {
    const { items, onTextEdit, onTextDelete , clearList } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
        
          items.sort(compare_id).map((itm) =>{
            return(
              <TodoItem
                key = {itm.id}
                title = {itm.text}
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
