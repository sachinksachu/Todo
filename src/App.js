import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import CakeContainer from './components/CakeContainer';
import store from './redux/store';
//import IceCreamContainer from './components/IceCreamContainer';
//import TestContainer from './components/TestContainer';
//import TestClassContainer from './components/TestClassContainer';
import Main from './components/Main';
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
