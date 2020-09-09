import {ADD_ITEM, CLEAR_ITEM, DELETE_ITEM,EDIT_TODO} from './todoTypes';

import uuid from 'uuid';


export const todoReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_ITEM:
    return [...state, {
      id : uuid(),
      text: action.text,
      edit: false
    }];
   
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
