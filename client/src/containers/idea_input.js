import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newIdea, joinBoard, leaveBoard } from '../actions/index';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './styles/main.scss';

class IdeaInput extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    newIdea: PropTypes.func.isRequired,
    joinBoard: PropTypes.func.isRequired,
    leaveBoard: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    board: PropTypes.object.isRequired,
    joined: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onJoinBoard = this.onJoinBoard.bind(this);
    this.onLeaveBoard = this.onLeaveBoard.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term.length) {
      this.props.newIdea(this.state.term, this.props.params.board_id);
    }

    this.setState({ term: '' });
  }

  onJoinBoard() {
    this.props.joinBoard(this.props.board.id);
  }

  onLeaveBoard() {
    this.props.leaveBoard(this.props.board.id);
  }

  render() {
    if (this.props.joined) {
      return (
        <div className="idea-input-container">
          <form onSubmit={this.onFormSubmit}>
            <TextField
              hintText="Submit an idea"
              floatingLabelText="Great ideas start here..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <RaisedButton
              type="submit"
              className="idea-button"
              label="Submit"
            />
            <RaisedButton
              type="button"
              className="idea-button"
              label="Leave Board"
              onTouchTap={this.onLeaveBoard}
            />
          </form>
        </div>
      );
    }
    return (
      <div className="idea-input-container">
        <span>You have not joined this board. Would you like to join?</span>
        <RaisedButton
          type="button"
          className="idea-button"
          label="Join Board"
          onTouchTap={this.onJoinBoard}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newIdea, joinBoard, leaveBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaInput);
