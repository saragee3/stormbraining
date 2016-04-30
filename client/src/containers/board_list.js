import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class BoardList extends Component {

  static propTypes = {
    boards: PropTypes.array.isRequired,
  }

  renderBoardListing(data) { // renders a single row of the list table
    return (
      <tr key={data}>
        <td>
        {data}
          <Link to="" className="btn btn-secondary">
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
          {this.props.boards.map(this.renderBoardListing)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ boards }) {
  return { boards };
}

export default connect(mapStateToProps)(BoardList);
