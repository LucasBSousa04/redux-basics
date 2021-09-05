/* eslint-disable no-shadow */
// This alt app is done by using
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function onAgeUp(val) {
  return { type: 'AGE_UP', val };
}
function onAgeDown(val) {
  return { type: 'AGE_DOWN', val };
}

function AltApp() {
  // With useSelector, we can access the state in store
  const state = useSelector((state) => state);
  // With dispatch, we can dispatch actions to the reducers
  const dispatch = useDispatch();

  function ageUp() {
    dispatch(onAgeUp(1));
  }
  function ageDown() {
    dispatch(onAgeDown(1));
  }

  return (
    <div className="App">
      <div>
        <h3>Redux using hooks</h3>
        Age:
        {state.age}
        <span />
      </div>
      <button type="button" onClick={ageUp}>Age UP</button>
      <button type="button" onClick={ageDown}>Age Down</button>
    </div>
  );
}

export default AltApp;
