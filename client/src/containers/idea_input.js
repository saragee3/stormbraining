import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newIdea, getOneBoard } from '../actions/index';

class IdeaInput extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    newIdea: PropTypes.func.isRequired,
    getOneBoard: PropTypes.func.isRequired,
    board: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    console.log('ideainput', this.props.board);
    event.preventDefault();
    if (this.state.term.length > 2) {
      this.props.newIdea(this.state.term, this.props.params.board_id);
      this.props.getOneBoard(this.props.params.board_id);
    }

    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Great ideas start here..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newIdea, getOneBoard }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaInput);
