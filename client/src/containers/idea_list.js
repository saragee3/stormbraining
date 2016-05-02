import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneBoard, upVote } from '../actions/index';
import Votes from './votes';

class IdeaList extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    ideas: PropTypes.array.isRequired,
    getOneBoard: PropTypes.func,
    board: PropTypes.object,
    upVote: PropTypes.func.isRequired,
  }

  renderIdea(data) {
    return (
      <tr key={data.content}>
        <td>
          {data.content}
        </td>
        <td>
          <Votes {...data} />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Idea</th>
            <th>Votes</th>
            <th></th>
          </tr>
        </thead>
        <tbody clasName="col-xs-12">
          {this.props.board.ideas.map(this.renderIdea)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOneBoard, upVote }, dispatch);
}

function mapStateToProps({ ideas }) {
  return { ideas };
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList);
