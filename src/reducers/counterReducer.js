import React from 'react';

const counterReducer = (state,action) =>{
  console.log(state, action);
  if(action.type === "INCREMENT"){
    return state+1;
  }
  if(action.type === "DECREMENT"){
    return state-1;
  }
  return state;
}

export {counterReducer}
