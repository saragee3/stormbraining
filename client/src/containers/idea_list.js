import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneBoard, sortIdeasByVotes } from '../actions/index';
import Idea from './idea';

class IdeaList extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    getOneBoard: PropTypes.func,
    board: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    sortIdeasByVotes: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = { sorting: { byIdeas: 0, byVotes: 0, byDate: 1 } };
    this.renderIdea = this.renderIdea.bind(this);
    this.onSortIdeasByVotes = this.onSortIdeasByVotes.bind(this);
  }

  onSortIdeasByVotes() {
    // order: 1 is descending, 2 is ascending, 0 is not sorted
    let order = this.state.sorting.byVotes + 1;
    order = order > 2 ? 0 : order;
    this.props.sortIdeasByVotes(order);
    this.setState({ sorting: { byIdeas: 0, byVotes: order, byDate: 0 } });
  }

  renderIdea(data) {
    const userId = this.props.userId;
    return (
      <Idea {...data} userId={userId} key={data.id}/>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Idea</th>
            <th onClick={this.onSortIdeasByVotes}>
              Votes {this.state.sorting.byVotes}
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.board.ideas.map(this.renderIdea)}
        </tbody>
      </table>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOneBoard, sortIdeasByVotes }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaList);
