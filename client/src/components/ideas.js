import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneBoard } from '../actions/index';
import io from 'socket.io-client';

import IdeaInput from '../containers/idea_input';
import IdeaList from '../containers/idea_list';

class Ideas extends Component {

  static propTypes = { // this seems to be the preferred set-up
    params: PropTypes.object,
    getOneBoard: PropTypes.func,
    board: PropTypes.object,
  }

  componentWillMount() {
    this.props.getOneBoard(this.props.params.board_id);
    this.socket = io();
    this.socket.on('idea', (ideaDoc) => {
      console.log('An idea has changed', ideaDoc);
    });
  }

  render() {
    if (!this.props.board) {
      return <div>Thinking...</div>;
    }
    return (
      <div>
        <h1>Good ideas go here</h1>
        <h2>Topic: {this.props.board.title}</h2>
        <IdeaInput {...this.props} />
        <IdeaList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps({ board }) {
  return { board };
}

export default connect(mapStateToProps, { getOneBoard })(Ideas);
