import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getBoards } from '../actions/index';

class BoardList extends Component {

  static propTypes = {
    boards: PropTypes.object.isRequired,
    getBoards: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.getBoards();
  }

  renderBoardListing(data) { // renders a single row of the list table
    return (
      <tr key={data.id}>
        <td>
        {data.title}
          <Link to={`boards/${data.id}` } className="btn btn-secondary">
            View
          </Link>
        </td>
      </tr>
    );
  }
  render() { // renders an entire table of boards
    return (
      <table className="table table-hover">
        <tbody clasName="col-xs-12">
          {this.props.boards.all.map(this.renderBoardListing)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getBoards }, dispatch);
}

function mapStateToProps({ boards }) {
  return { boards };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardList);
