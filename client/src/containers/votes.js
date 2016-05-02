import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { upVote, getOneBoard } from '../actions/index';

class Votes extends Component {

  static propTypes = {
    ideas: PropTypes.array.isRequired,
    upvotes: PropTypes.number.isRequired,
    boardId: PropTypes.string.isRequired,
    getOneBoard: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    upVote: PropTypes.func.isRequired,
  }

  renderVotes() {
    this.props.upVote(this.props.boardId, this.props.id);
    this.props.getOneBoard(this.props.boardId);
  }

  render() {
    return (
      <span>
        {this.props.upvotes}
        <td>
          <button
            onClick={this.renderVotes.bind(this)}
            className="btn btn-success"
          >
            Upvote
          </button>
        </td>
      </span>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upVote, getOneBoard }, dispatch);
}

function mapStateToProps({ ideas }) {
  return { ideas };
}

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
