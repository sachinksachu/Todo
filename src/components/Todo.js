import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import uuid from "uuid";
import { connect } from 'react-redux';
import { addTodo,clearTodo,deleteTodo } from '../redux';
import {bindActionCreators} from 'redux'

const mapStateToProps = state => { // get state from redux store as props
    return({
        textObject : state.todoR
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo,clearTodo, deleteTodo
    }, dispatch)
}


export class Todo extends Component {
	constructor(props){
        super(props)
	this.state = {
	    text : "",

	};
}

  onChangeText = (e) =>{
    this.setState({
      text : e.target.value
    })
  }

  onSubmitText = (e) => {
	e.preventDefault();
	this.props.addTodo(this.state.text);
  }

  onTextEdit = (id) =>{
    const filteredItems = this.props.textObject.filter(item => item.id !== id);

    const selectedItem = this.props.textObject.find(item => item.id === id);

    console.log(selectedItem);

    this.setState({
      item: selectedItem.text,
      edit: true,
      id: id
    });
  };

  onTextDelete = (id) => {
    const filteredItems = this.props.textObject.filter(item => item.id !== id);
    this.props.deleteTodo(filteredItems);
    console.log(filteredItems);
  };

  clearList = () =>{
    this.props.clearTodo();
  }
  render() {
    return (
      <div>
        <TodoInput 
            item = {this.state.text}
            onChangeText={this.onChangeText}
            onSubmitText = {this.onSubmitText}
            //edit={this.state.edit}
        />
      	
      	 <TodoList 
          items={this.props.textObject}
          onTextEdit={this.onTextEdit}
          onTextDelete={this.onTextDelete}
          clearList={this.clearList}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
