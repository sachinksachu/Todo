import {ADD_ITEM, CLEAR_ITEM, DELETE_ITEM} from './todoTypes';

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
    
  default:
    return state;
  }
}
