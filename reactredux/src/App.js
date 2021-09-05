import React from 'react';
import './App.css';
// Connect and map is the old way to access store
import { connect } from 'react-redux';

function App({
  age,
  onAgeUp,
  onAgeDown,
}) {
  // eslint-disable-next-line no-shadow
  return (
    <div className="App">
      <div>
        Age:
        {age}
        <span />
      </div>
      <button type="button" onClick={onAgeUp}>Age UP</button>
      <button type="button" onClick={onAgeDown}>Age Down</button>
    </div>
  );
}

// Mapping the state so we can use it as props.
const mapStateToProps = (state) => ({
  age: state.age,
});

// Maps the action's dispatches. It's "to props"
// because we'll use them on components'props
const mapDispatchToProps = (dispatch) => ({
  onAgeUp: () => dispatch({ type: 'AGE_UP' }),
  onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
});

// Connect gives a high-level component
export default connect(mapStateToProps, mapDispatchToProps)(App);
