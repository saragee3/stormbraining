import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getOneBoard } from '../actions/index';

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
        <IdeaList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { board: state.boards.board };
}

export default connect(mapStateToProps, { getOneBoard })(Ideas);
