/* React Redux */
import DisplayNumber from '../components/displayNumber';
import { connect } from 'react-redux';

/* 리액트와 리덕스 연결함수 connect() 
커텍트를 실행하면 리턴값이 함수가 되고 리턴된 함수를 다시 실행하는 것을 통해 만들어진 값을 export.
Presentational 컴포넌트를 두번째 인자로 전달하면  인자로 전달한 컴포넌트 Container Component가 되서 리턴된다.
아래 주석처리한 리덕스 코드에서 Presentational 컴포넌트를 리턴하는 것과 같고,
상위컴포넌트와 하위 컴포넌트의 props 전달을 자동으로 처리해준다. */
function mapReduxStateToReactProps(state) {
  // mapStateToProps - mapReduxState를 React의 Props 맵핑(연결)해준다.
  return {
    number: state.number,
  };
}

// function mapReduxDispatchToReaxtProps() {
//   // mapDispatchToProps - mapReduxDispatch를 React의 Props 맵핑(연결)해준다.
//   return {};
// }

// connect( mapStateToProps, mapDispatchToProps )( Preseintational Component );
export default connect(mapReduxStateToReactProps)(DisplayNumber);

/* Redux

import React, { Component } from 'react';
import DisplayNumber from '../components/displayNumber';
import store from '../store';

export default class extends Component {
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    store.subscribe(
      function () {
        this.setState({ number: store.getState().number });
      }.bind(this)
    );
  }
  render() {
    return <DisplayNumber number={this.state.number} unit={this.props.unit} />;
  }
} */
