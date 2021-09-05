import React from 'react';
import './App.css';
// Connect and map is the old way to access store
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AltApp from './AltApp';

function App({
  age,
  onAgeUp,
  onAgeDown,
}) {
  return (
    <>
      <div className="App">
        <div>
          <h3>Redux using connect</h3>
          Age:
          {age}
          <span />
        </div>
        <button type="button" onClick={onAgeUp}>Age UP</button>
        <button type="button" onClick={onAgeDown}>Age Down</button>
      </div>
      <AltApp />
    </>
  );
}

App.propTypes = {
  age: PropTypes.number.isRequired,
  onAgeUp: PropTypes.func.isRequired,
  onAgeDown: PropTypes.func.isRequired,
};

// Mapping the state so we can use it as props.
const mapStateToProps = (state) => ({
  age: state.age,
});

// Maps the action's dispatches. It's "to props"
// because we'll use them on components'props
const mapDispatchToProps = (dispatch) => ({
  onAgeUp: () => dispatch({ type: 'AGE_UP', val: 1 }),
  onAgeDown: () => dispatch({ type: 'AGE_DOWN', val: 1 }),
});

// Connect gives a high-level component
export default connect(mapStateToProps, mapDispatchToProps)(App);
