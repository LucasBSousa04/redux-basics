const { createStore } = require('redux');

const initialState = {
  age: 21,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === 'ADD') {
    newState.age += action.val;
  }
  if (action.type === 'SUBTRACT') {
    newState.age -= action.val;
  }

  return newState;
};

const store = createStore(myReducer);

// Whenever the state changes, this happens
store.subscribe(() => {
  console.log('State has changes');
});

console.log(`Initial state: ${store.getState().age}`);
store.dispatch({ type: 'ADD', val: 10 });
console.log(`After add: ${store.getState().age}`);

store.dispatch({ type: 'SUBTRACT', val: 10 });
console.log(`After subtract: ${store.getState().age}`);

console.log(JSON.stringify(store.getState()));
