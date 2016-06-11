import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchpost } from '../actions';

class TestApp  extends Component {


  constructor(props) {
      super(props);

    }

  componentWillMount() {

    }



  render () {
      return (
            <h2> This is Working</h2>

      );
  }
}


function mapStateToProps(state) {
  // what ever is returned from this will be props inside of BookList
  return {
  //  todos: state.todos,

  };
}

// what ever is returned from this will be props inside of BookList
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called, the result should be passed to all the reducers
  return bindActionCreators( { fetchpost }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TestApp)


// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchpost } from '../actions';
//
// class TestApp  extends Component {
//
//
//   constructor(props) {
//       super(props);
//
//     }
//
//   componentWillMount() {
//
//     }
//
//
//
//   render () {
//       return (
//
//
//       );
//   }
// }
//
//
// function mapStateToProps(state) {
//   // what ever is returned from this will be props inside of BookList
//   return {
//     todos: state.todos,
//
//   };
// }
//
// // what ever is returned from this will be props inside of BookList
// function mapDispatchToProps(dispatch) {
//   // whenever selectbook is called, the result should be passed to all the reducers
//   return bindActionCreators( { fetchpost }, dispatch);
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(TestApp)
