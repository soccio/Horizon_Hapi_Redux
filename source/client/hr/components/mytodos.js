import React from 'react';
import { Component, PropTypes } from 'react';
import Logo from './Logo';
import TodoList from '../containers/todos/TodoList';
import AddTodoButton from '../containers/todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';


export default class MyTodos extends Component {

  render() {

        return (
          <div>
            <div className={styles.container}>
              <Logo />
              <p className={styles.tCenter}>
                <b>Welcome.</b>
                <br />
                You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
              </p>
              <TodoList limit={2} />
              <AddTodoButton />
              <div className={styles.footer}>
                ToDos are deleted automatically every 10 minutes.
                <br /><br />
                built with <i className="fa fa-heart" /> by <a href="https://github.com/flipace" target="_blank">@flipace</a>
              </div>
            </div>
            <div className={styles.social}>
              <iframe
                src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=star&count=true"
                frameBorder="0"
                scrolling="0"
                width="85px"
                height="20px"
              />
              <iframe
                src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=fork&count=true"
                frameBorder="0"
                scrolling="0"
                width="85px"
                height="20px"
              />
            </div>
          </div>
              );
    }
  }
