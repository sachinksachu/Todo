import {createStore, combineReducers, applyMiddleware} from 'redux';
import { cakeReducer } from './cakes/cakeReducer';
import { iceCreamReducer } from './icecream/iceCreamReducer';
import {logger} from 'redux-logger';

function loadfromlocalStorage() {
	try {
		const serializedState = localStorage.getItem('state');
		if(serializedState === null){
			return undefined;
		}
		return JSON.parse(serializedState);
	}
	
	catch(err){
		return undefined;
	}
}

function savetoLocalStorage(state){
	try{
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	}
	catch(err) {
		return undefined;
	}
}

const persistedState = loadfromlocalStorage();

const rootReducer = combineReducers({ //combine reducer
    cakeR: cakeReducer,
    iceR: iceCreamReducer
})


const store = createStore(rootReducer,persistedState, applyMiddleware(logger)) //create store

store.subscribe(() => {
  savetoLocalStorage(store.getState());
});

export default store;
