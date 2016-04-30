import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newBoard } from '../actions/index';

class BoardInput extends Component {

  static propTypes = {
    newBoard: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { board: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ board: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.newBoard(this.state.board);
    this.setState({ board: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Name your brainstorm"
          className="form-control"
          value={this.state.board}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// BoardInput.propTypes = {
//   newBoard: React.PropTypes.function,
// };

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(BoardInput);
