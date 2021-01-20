import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './App.css';


function App() {

  const state = useSelector((state) => state.reducer);
  const nome = useSelector((state) => state.reducer2);
  const dispatch = useDispatch();


  return (
    <div>
      <div className="box1">
        <h1 className="estado">
          {state}
        </h1>
        <button className="btn1" onClick={() => dispatch({ type: 'SOMAR' })}>
          Somar +1
        </button>
        <button className="btn2" onClick={() => dispatch({ type: 'SUBTRAIR' })}>
          Subtrair -1
        </button>
      </div>
      <div className="box2">
        <h1>
          {nome}
        </h1>
        <button className='red' onClick={() => dispatch({ type: 'RED'})}>
        </button>
        <button className='green' onClick={() => dispatch({ type: 'GREEN'})}>
        </button>
        <button className='yellow' onClick={() => dispatch({ type: 'YELLOW'})}>
        </button>
        <button className='pink' onClick={() => dispatch({ type: 'PINK'})}>
        </button>
        <button className='black' onClick={() => dispatch({ type: 'BLACK'})}>
        </button>
      </div>
    </div>
  );
}



export default App;
