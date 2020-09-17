import uuid from 'uuid';
import {ADD_ITEM, CLEAR_ITEM,DELETE_ITEM,EDIT_TODO} from './todoTypes';



export const addTodo = (text,id) => ({
    type: ADD_ITEM,
    payload :{
      id:id,
      text : text
    }
})

export const clearTodo = () => ({
    type: CLEAR_ITEM,
})

export const deleteTodo = (items) => ({
	type : DELETE_ITEM,
	items,
	
})

export const editTodo = (text,id) => ({
  type: EDIT_TODO,
  text,
  id
})
