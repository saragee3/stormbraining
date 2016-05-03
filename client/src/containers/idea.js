import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote, getOneBoard } from '../actions/index';

class Idea extends Component {

  static propTypes = {
    content: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    boardId: PropTypes.string.isRequired,
    getOneBoard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    upVote: PropTypes.func.isRequired,
  }

  renderVotes() {
    this.props.upVote(this.props.boardId, this.props.id);
  }

  render() {
    return (
      <tr>
        <td>
          {this.props.content}
        </td>
        <td>
          {this.props.upvotes}
        </td>
        <td>
          <button
            onClick={this.renderVotes.bind(this)}
            className="btn btn-success"
          >
            Upvote
          </button>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upVote, getOneBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(Idea);
