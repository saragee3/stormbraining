import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneBoard, refreshBoardView, clearBoardView, syncComment } from '../actions/index';
import io from 'socket.io-client';
import AppBar from 'material-ui/AppBar';

import Paper from 'material-ui/Paper';
import { paper } from './app.js';
import IdeaInput from '../containers/idea_input';
import IdeaList from '../containers/idea_list';
import Chat from '../containers/chats';

class Ideas extends Component {

  static propTypes = { // this seems to be the preferred set-up
    params: PropTypes.object,
    getOneBoard: PropTypes.func,
    refreshBoardView: PropTypes.func,
    clearBoardView: PropTypes.func,
    syncComment: PropTypes.func,
    board: PropTypes.object,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  componentWillMount() {
    this.props.getOneBoard(this.props.params.board_id)
      .then(() => {
        this.socket = io();
        this.socket.on('connect', () => {
          this.socket.emit('subscribe', this.props.board.id);
        });
        this.socket.on('idea', (ideaDoc) => {
          this.props.refreshBoardView(ideaDoc);
        });
        this.socket.on('comment', (comment) => {
          this.props.syncComment(comment);
        });
      });
  }

  componentWillUnmount() {
    this.socket.emit('unsubscribe', this.props.board.id);
    this.props.clearBoardView();
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={{ color: this.context.muiTheme.palette.textColor }}>
              {this.props.board.title}
            </span>}
          iconElementLeft={<Chat {...this.props} />}
          zDepth={3}
          style={{ backgroundColor: this.context.muiTheme.palette.primary3Color, textAlign: 'center' }}
        />
        <Paper style={paper} zDepth={0}>
          <IdeaInput {...this.props} />
          <IdeaList {...this.props} />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({ board, auth }) {
  const userId = auth.profile.user_id;
  const userName = auth.profile.nickname;
  const memberIds = board.members.map((member) => member.id);
  const joined = memberIds.indexOf(userId) > -1 || userId === board.authorId;
  return { board, userId, userName, joined };
}

export default connect(mapStateToProps, { getOneBoard, refreshBoardView, clearBoardView, syncComment })(Ideas);
