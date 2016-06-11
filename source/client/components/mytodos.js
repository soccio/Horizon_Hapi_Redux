import React from 'react';
import { Component, PropTypes } from 'react';
import TodoList from '../containers/todos/TodoList';
import AddTodoButton from '../containers/todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';


export default class MyTodos extends Component {

  render() {

        return (
          <div>
            <div className={styles.container}>
              <p className={styles.tCenter}>
                <b>Welcome.</b>
                <br />
                You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
              </p>
              <TodoList limit={2} />
              <AddTodoButton />
              <div className={styles.footer}>

              </div>
            </div>
            <div className={styles.social}>

            </div>
          </div>
              );
    }
  }
