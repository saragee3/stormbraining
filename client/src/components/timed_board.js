import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { clearBoardView } from '../actions/index';
import AppBar from 'material-ui/AppBar';

import Paper from 'material-ui/Paper';
import { paper } from './app.js';
import TimedIdeaInput from '../containers/idea_input';
import TimedIdeaList from '../containers/idea_list';

class TimedBoard extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    getTimedBoard: PropTypes.func.isRequired,
    clearTimedBoardView: PropTypes.func.isRequired,
    timedBoard: PropTypes.object.isRequired,
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    const timeEnd = Date.now(this.props.timedBoard.createdAt) + this.props.timedBoard.timerLength;
    const timeNow = Date.now();
    const timeRemaining = timeEnd > timeNow ? timeEnd - timeNow : 0;
    this.state = { timeRemaining };
  }

  componentWillMount() {
    this.props.getTimedBoard(this.props.params.timed_board_id)
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    this.props.clearTimedBoardView();
    clearInterval(this.interval);
  }

  tick() {
    const timeEnd = Date.now(this.props.timedBoard.createdAt) + this.props.timedBoard.timerLength;
    const timeNow = Date.now();
    const timeRemaining = timeEnd > timeNow ? timeEnd - timeNow : 0;
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }

  render() {
    return (
      <div>
        <AppBar
          title={<span style={{ color: this.context.muiTheme.palette.textColor }}>
              {this.props.board.title}
            </span>}
          iconElementLeft={<div />}
          zDepth={3}
          style={{ backgroundColor: this.context.muiTheme.palette.primary3Color, textAlign: 'center' }}
        />
        <Paper style={paper} zDepth={0}>
          <TimedIdeaInput {...this.props} />
          <TimedIdeaList {...this.props} />
        </Paper>
      </div>
    );
  }
}

function mapStateToProps({ timedBoard }) {
  return { timedBoard };
}

export default connect(mapStateToProps, { getOneBoard, refreshBoardView, clearBoardView, syncComment })(Timer);
