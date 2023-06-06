import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [state,dispatch] = useReducer(counterReducer,{/*initial state to be placed here*/})
  return (
    <div id="main">

    </div>
  )
}


export default App;
