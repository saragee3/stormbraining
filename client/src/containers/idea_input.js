import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newIdea } from '../actions/index';

class IdeaInput extends Component {
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
    event.preventDefault();
    this.props.newIdea(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Ideazzzzz"
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

IdeaInput.propTypes = {
  newIdea: React.PropTypes.string.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ newIdea }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaInput);
