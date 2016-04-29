import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class IdeaList extends Component {
  renderIdea(data) {
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

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Idea</th>
          </tr>
        </thead>
        <tbody clasName="col-xs-12">
          {this.props.ideas.map(this.renderIdea)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ ideas }) {
  return { ideas };
}

IdeaList.propTypes = {
  ideas: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(IdeaList);
