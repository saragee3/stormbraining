import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class IdeaList extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    ideas: PropTypes.array.isRequired,
  }

  renderIdea(data) {
    return (
      <tr key={data.data.idea.id}>
        <td>
          {data.data.idea.content}
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
            <th>Votes</th>
            <th></th>
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

export default connect(mapStateToProps)(IdeaList);
