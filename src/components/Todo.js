import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import uuid from "uuid";
import { connect } from 'react-redux';
import { addTodo,clearTodo,deleteTodo,editTodo } from '../redux';
import {bindActionCreators} from 'redux'

const mapStateToProps = state => { // get state from redux store as props
    return({
        textObject : state.todoR,
        
    });
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo,clearTodo, deleteTodo, editTodo
    }, dispatch)
}


export class Todo extends Component {
	constructor(props){
        super(props)
	this.state = {
	    text : "",
	    id : 0,
	    edit: false,
	    count : 0

	};
}

  onChangeText = (e) =>{
    this.setState({
      text : e.target.value
    })
  }

  onSubmitText = (e) => {
	e.preventDefault();
	this.setState({
      		count: this.state.count +1,
    	});
	if(!this.state.edit)
		this.props.addTodo(this.state.text,this.state.count);
	else
		this.props.editTodo(this.state.text, this.state.id);
		
	this.setState({
      		edit: false,
    	});
	
  	}

  onTextEdit = (id) =>{
    const filteredItems = this.props.textObject.filter(item => item.id !== id);

    const selectedItem = this.props.textObject.find(item => item.id === id);

    this.props.deleteTodo(filteredItems);

    this.setState({
      text: selectedItem.text,
      edit: true,
      id: id
    });
    
    
    console.log("kooi",id);
  };

  onTextDelete = (id) => {
    const filteredItems = this.props.textObject.filter(item => item.id !== id);
    this.props.deleteTodo(filteredItems);
    //console.log(filteredItems);
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
            edit={this.state.edit}
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
