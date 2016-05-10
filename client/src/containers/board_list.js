import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getBoards, refreshAllBoards, deleteBoard } from '../actions/index';
import io from 'socket.io-client';

class BoardList extends Component {

  static propTypes = {
    allBoards: PropTypes.array.isRequired,
    getBoards: PropTypes.func.isRequired,
    refreshAllBoards: PropTypes.func.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
  }

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
        <button
          onClick={this.renderDeleteBoard.bind(this, data)}
          className="btn btn-danger"
        >
          Delete
        </button>
      );
    }
  }

  renderDeleteBoard(data) {
    this.props.deleteBoard(data.id);
  }

  renderBoardListing(data) { // renders a single row of the list table
    return (
      <tr {...this.props} key={data.id}>
        <td>
          {data.title}
          <Link to={`boards/${data.id}` } className="btn btn-secondary">
            View
          </Link>
        </td>
        <td>
          {this.deleteButton(data)}
        </td>
      </tr>
    );
  }

  render() { // renders an entire table of boards
    return (
      <table className="table table-hover">
        <tbody clasName="col-xs-12">
          {this.props.allBoards.map(this.renderBoardListing)}
        </tbody>
      </table>
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
