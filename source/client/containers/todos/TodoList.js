import React from 'react';
//import { subscribe } from 'horizon-react';

import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../../actions/index';
import TodoItem from './TodoItem';
import styles from './styles';

class TodoList extends Component {

  constructor(props) {
    super(props);
  }

componentWillMount() {
   this.props.fetchPosts();
  }

  renderTodos() {
    return this.props.todos.map(todo => {
      return <TodoItem key={todo.id} id={todo.id} todo={todo.text}/>
    });
  }


  render() {

      return (
      //  <ul className={styles.list} style={{ height: this.props.todos.length * 49 }}>

          <ul className={styles.list} >
            {this.renderTodos()}
        </ul>

            );
  }
}

function mapStateToProps(state) {
  // what ever is returned from this will be props inside of BookList
  return {
    todos: state.todos.all,

  };
}

// what ever is returned from this will be props inside of BookList
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called, the result should be passed to all the reducers
  return bindActionCreators({ fetchPosts }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
