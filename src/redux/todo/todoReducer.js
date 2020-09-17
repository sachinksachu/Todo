import {ADD_ITEM, CLEAR_ITEM, DELETE_ITEM,EDIT_TODO} from './todoTypes';

import uuid from 'uuid';


const addTodo = (state, newTodo) => {
  
  const { text} = newTodo.payload;
  
  //const newId = newTodo.id;
  const todo = {
    id: state.length,
    text,
    edit:false
  };
  const newState = [...state, todo]
  return newState 

//var todo = action.payload;
//todo.id = state.lenght;
//todo.text =
};

export const todoReducer = (state= [], action) => {
  switch (action.type) {
  case ADD_ITEM:
  	return addTodo(state, action);
    	
   
   case CLEAR_ITEM :
   	return [];
   	
   case DELETE_ITEM :
   	return action.items;
    
    case EDIT_TODO :
    	return [...state, {
      id : action.id,
      text: action.text,
      edit:true
    }];
  default:
    return state;
  }
}
