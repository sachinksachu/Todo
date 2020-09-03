import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import uuid from "uuid";
export class Todo extends Component {
  state = {
    items : [],
    item : "",
    id : uuid(),
    edit : false

  };

  onChangeText = (e) =>{
    this.setState({
      item : e.target.value
    })
  }

  onSubmitText = (e) => {
    e.preventDefault();
    const newItem = {
      id : this.state.id,
      title : this.state.item
    };

    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items : updatedItem,
      item : null,
      id : uuid(),
      edit : false
    })

  }

  onTextEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);

    const selectedItem = this.state.items.find(item => item.id === id);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      edit: true,
      id: id
    });
  };

  onTextDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  clearList = () =>{
    this.setState({
      items: []
    });
  }
  render() {
    return (
      <div>
        <TodoInput 
            item = {this.state.item}
            onChangeText={this.onChangeText}
            onSubmitText = {this.onSubmitText}
            edit={this.state.edit}
        />
        <TodoList 
          items={this.state.items}
          onTextEdit={this.onTextEdit}
          onTextDelete={this.onTextDelete}
          clearList={this.clearList}
        />
      </div>
    )
  }
}

export default Todo
