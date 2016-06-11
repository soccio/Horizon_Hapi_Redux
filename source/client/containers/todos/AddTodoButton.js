import React from 'react';
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

import styles from './styles';

class AddTodoButton extends Component {

  constructor(props) {
    super(props);

  }

componentWillMount() {
//  this.props.fetchPosts();
  this.setState({ todos:"" });
  }

  handleInputChange(event) {
    this.setState({ todos: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.addTodo(this.state.todos)
    this.setState({ todos:"" });

  }

          render() {
              return (
                <div>
                  <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
                    <input
                      id="todo-text"
                      className={styles.input}
                      type="text"
                      placeholder="A new todo item..."
                      value={this.state.todos}
                      autoFocus
                      onChange={this.handleInputChange.bind(this)} />
                    <button action="submit" className={styles.button}>Create Post</button>


                  </form>

                </div>

                  );
                }
            }



function mapStateToProps(state) {
  // what ever is returned from this will be props inside of BookList
  return {
    todos: state.todos,

  };
}

// what ever is returned from this will be props inside of BookList
function mapDispatchToProps(dispatch) {
  // whenever selectbook is called, the result should be passed to all the reducers
  return bindActionCreators( actions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTodoButton)
