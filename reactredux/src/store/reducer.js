const initialState = {
  age: 21,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'AGE_UP':
      newState.age += 1;
      console.log('aaa');
      break;
    case 'AGE_DOWN':
      newState.age -= 1;
      console.log('zzz');
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
