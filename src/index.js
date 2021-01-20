import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

function reducer(state = 0, action) {
  if(action.type === 'SOMAR') {
    return state + 1;
  }
  else if(action.type === 'SUBTRAIR') {
    return state - 1;
  }
  else {
    return state;
  }
}

function reducer2(state = 'CLIQUE NA COR ABAIXO PARA SABER SEU NOME EM INGLÊS', action) {
  if(action.type === 'RED') {
    return state = 'RED';
  }
  else if(action.type === 'GREEN') {
    return state = 'GREEN';
  } 
  else if(action.type === 'YELLOW') {
    return state = 'YELLOW';
  }
  else if(action.type === 'PINK') {
    return state = 'PINK';
  }
  else if(action.type === 'BLACK') {
    return state = 'BLACK';
  }
  else {
    return state;
  }
}

const reducers = combineReducers( {reducer, reducer2} );
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

