import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import styles from './styles';


class TodoItem extends Component {
  handleClick() {
    this.props.deletePost(this.props.id);
  }

  render() {
    return (
      <li className={styles.item} key={this.props.id}>
        <span className={styles.caption}>{this.props.todo || '-'}</span>
        <span className={styles.actions}>
          <i
            className="fa fa-remove"
            onClick={this.handleClick.bind(this)}
          />
        </span>
      </li>
    );
  }
}

export default connect(null, actions)(TodoItem);
