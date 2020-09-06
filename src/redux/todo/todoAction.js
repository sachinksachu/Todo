import uuid from 'uuid';
import {ADD_ITEM, CLEAR_ITEM,DELETE_ITEM} from './todoTypes';



export const addTodo = text => ({
    type: ADD_ITEM,
    id: uuid(),
    text
})

export const clearTodo = () => ({
    type: CLEAR_ITEM,
})

export const deleteTodo = (items) => ({
	type : DELETE_ITEM,
	items,
	
})
