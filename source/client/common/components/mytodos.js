import React from 'react';
import { Component, PropTypes } from 'react';


import TestApp from '../../hr/containers/testapp';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import 'static/vendor/bootstrap/bootstrap.min.css';

import styles from '../styles/app';


export default class MyTodos extends Component {

  render() {

        return (
          <div>
            <div className={styles.container}>

              <TestApp />
              <div className={styles.footer}>
                <i>Yo yo men ! - This is very cool llok</i>
              </div>
            </div>
          </div>
              );
    }
  }
