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
    const { items, onTextEdit, onTextDelete , clearList, edit, id, search,item } = this.props;
    return (
      <div className="container mt-3">
      	<div className="row">
        <ul className="list-group col-10 col-sm-6 m-auto">
        <h3 className="text-capitalize text-center">todo list</h3>
        {
        (!search) ?
          (items.sort(compare_id).map((itm) =>{
            return(
            	<div  className={edit && id===itm.id? "mb-4 bg-danger" : "mb-4 list-color"} >
              <TodoItem 
                key = {itm.id}
                title = {itm.text}
                onTextEdit ={() => onTextEdit(itm.id)}
                onTextDelete={() => onTextDelete(itm.id)}

              />
              </div>
            );
          })) : (items.filter(name => name.text.toLowerCase().includes(item.toLowerCase())).map((itm) =>{
            return(
            	<div  className={edit && id===itm.id? "mb-4 bg-danger" : "mb-4 list-color"} >
              <TodoItem 
                key = {itm.id}
                title = {itm.text}
                onTextEdit ={() => onTextEdit(itm.id)}
                onTextDelete={() => onTextDelete(itm.id)}

              />
              </div>
            );
          }))
        }
        </ul>
        </div>
        <div className="row">
        <button
          type="button"
          className="btn btn-danger btn-block text-capitalize col-4 col-sm-3 m-auto"
          onClick={clearList}
        >
          clear list
        </button>
         </div>
      
      </div>
    )
  }
}

export default TodoList
