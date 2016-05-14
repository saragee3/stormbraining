import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getBoards, refreshAllBoards, deleteBoard } from '../actions/index';
import io from 'socket.io-client';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';

class BoardList extends Component {

  static propTypes = {
    allBoards: PropTypes.array.isRequired,
    getBoards: PropTypes.func.isRequired,
    refreshAllBoards: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.renderBoardListing = this.renderBoardListing.bind(this);
  }

  componentWillMount() {
    this.props.getBoards();
    this.socket = io();
    this.socket.on('board', (boardDoc) => {
      this.props.refreshAllBoards(boardDoc);
    });
  }

  deleteButton(data) {
    if (this.props.userId === data.authorId) {
      return (
        <IconButton
          onTouchTap={this.renderDeleteBoard.bind(this, data)}
          tooltip="Delete board"
          touch
          tooltipPosition="bottom-center"
          label="Delete"
        >
          <DeleteForever hoverColor={this.context.muiTheme.palette.accent1Color} />
        </IconButton>
      );
    }
  }

  renderDeleteBoard(data) {
    this.props.deleteBoard(data.id);
  }

  renderBoardListing(data) { // renders a single row of the list table
    return (
        <ListItem {...this.props}
          href={`boards/${data.id}`}
          key={data.id}
          style={{padding:'0'}}
          primaryText={
            <span style={{ marginBottom: '20px' }}>{data.title}</span>
          }
          rightIconButton={
            this.deleteButton(data)
          }
        />
    );
  }

  render() { // renders an entire table of boards
    return (
      <List
        style={{
          textAlign: 'left',
          width: '60%'
        }}
      >
        {this.props.allBoards.map(this.renderBoardListing)}
      </List>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBoards, refreshAllBoards, deleteBoard }, dispatch);
}

function mapStateToProps({ allBoards, auth }) {
  return { allBoards, userId: auth.profile.user_id };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
