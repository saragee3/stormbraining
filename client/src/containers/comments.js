import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Comments extends Component {

  static propTypes = {
    // content: PropTypes.string.isRequired,
    // boardId: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
    // updateIdea: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { input: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  renderComments() {
    // if (this.state.showComments) {
      return (
        <tr>
          <td colSpan="5">
          Comments go here.
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                className="form-control"
                value={this.state.input}
                onChange={this.onInputChange}
              />
              <span className="input-group-btn">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                Save
                </button>
                <button
                  type="button"
                  onClick={this.onHideEdit}
                  className="btn btn-primary"
                >
                Cancel
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    // }
  }

  render() {
    return (
      this.renderComments()
    );
  }
}

// function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ }, dispatch);
// }

// export default connect(null, mapDispatchToProps)(Comments);
