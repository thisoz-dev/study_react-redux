/* React Redux */
import AddNumber from '../components/addNumber';
import { connect } from 'react-redux';

/* 리액트와 리덕스 연결함수 connect() */
function mapDispatchToProps(dispatch) {
  // store.dispatch
  return {
    onClick: (size) => {
      dispatch({ type: 'INCREMENT', size: size });
    },
  };
}

// 첫번째 인자가 null인 이유 : event만 있고 변경될 state가 없기때문.
export default connect(null, mapDispatchToProps)(AddNumber);

/* Redux 
import React, { Component } from 'react';
import AddNumber from '../components/addNumber';
import store from '../store';

export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: 'INCREMENT', size: size });
        }}
      />
    );
  }
} */
