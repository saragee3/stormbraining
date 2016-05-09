import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneBoard } from '../actions/index';
import Idea from './idea';

class IdeaList extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    getOneBoard: PropTypes.func,
    board: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.renderIdea = this.renderIdea.bind(this);
  }

  renderIdea(data) {
    const userId = this.props.userId;
    return (
      <Idea {...data} userId={userId} key={data.id}/>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.board.ideas.map(this.renderIdea)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOneBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaList);
