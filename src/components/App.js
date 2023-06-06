import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const initialState = 0;
const [state,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">
      <span id='counter'>{state}</span>
      <div>
        <button id='increment-btn' onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        <button id='decrement-btn' onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
      </div>
    </div>
  )
}


export default App;
