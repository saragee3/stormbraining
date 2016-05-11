import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote, unVote, getOneBoard, deleteIdea } from '../actions/index';
import { TableRow, TableRowColumn } from 'material-ui/Table';

import IdeaEditInput from '../containers/idea_edit_input';

class Idea extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    upvotes: PropTypes.array.isRequired,
    boardId: PropTypes.string.isRequired,
    getOneBoard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    upVote: PropTypes.func.isRequired,
    unVote: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderVote = this.renderVote.bind(this);
    // this.showCommentForm = this.showCommentForm.bind(this);
    this.renderDeleteIdea = this.renderDeleteIdea.bind(this);
  }

  voteButton() {
    if (this.props.upvotes.indexOf(this.props.userId) !== -1) {
      return (
        <button
          onClick={this.renderVote}
          className="btn btn-warning"
        >
          Un-vote
        </button>
      );
    }
    return (
      <button
        onClick={this.renderVote}
        className="btn btn-success"
      >
        Upvote
      </button>
    );
  }

  deleteButton() {
    if (this.props.userId === this.props.authorId) {
      return (
        <button
          onClick={this.renderDeleteIdea}
          className="btn btn-danger"
        >
          Delete
        </button>
      );
    }
  }

  renderDeleteIdea() {
    if (this.props.userId === this.props.authorId) {
      this.props.deleteIdea(this.props.boardId, this.props.id);
    }
  }

  renderVote() {
    if (this.props.upvotes.indexOf(this.props.userId) !== -1) {
      this.props.unVote(this.props.boardId, this.props.id);
    } else {
      this.props.upVote(this.props.boardId, this.props.id);
    }
  }

  render() {
    return (
      <TableRow>
        <IdeaEditInput {...this.props} />
        <TableRowColumn>
          {this.props.upvotes.length}
        </TableRowColumn>
        <TableRowColumn>
          {this.voteButton()}
        </TableRowColumn>
        <TableRowColumn>
          <button
            className="btn btn-primary"
            onClick={this.showCommentForm}
          >
            Show comments
          </button>
        </TableRowColumn>
        <TableRowColumn>
          {this.deleteButton()}
        </TableRowColumn>
      </TableRow>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upVote, unVote, getOneBoard, deleteIdea }, dispatch);
}

export default connect(null, mapDispatchToProps)(Idea);
