import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneBoard, sortIdeasByVotes, sortIdeasByContent, sortIdeasByTime } from '../actions/index';
import Idea from './idea';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlipMove from 'react-flip-move';

class IdeaList extends Component {

  static propTypes = {
    params: PropTypes.object.isRequired,
    getOneBoard: PropTypes.func,
    board: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    sortIdeasByVotes: PropTypes.func,
    sortIdeasByContent: PropTypes.func,
    sortIdeasByTime: PropTypes.func,
    joined: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { sort: 'oldest' };
    this.renderIdea = this.renderIdea.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, sort) {
    // order: 1 is descending, 2 is ascending, 0 is not sorted
    switch (sort) {
      case 'contentAsc':
        this.props.sortIdeasByContent(2);
        break;

      case 'contentDsc':
        this.props.sortIdeasByContent(1);
        break;

      case 'votesAsc':
        this.props.sortIdeasByVotes(2);
        break;

      case 'votesDsc':
        this.props.sortIdeasByVotes(1);
        break;

      case 'oldest':
        this.props.sortIdeasByTime(0);
        break;

      case 'newest':
        this.props.sortIdeasByTime(1);
        break;

      default:
        this.props.sortIdeasByContent(0);

    }
    this.setState({ sort });
  }

  renderIdea(data) {
    const userId = this.props.userId;
    const userName = this.props.userName;
    const joined = this.props.joined;
    return (
      <div style={{ padding: '10px' }} key={data.id}>
        <Idea {...data} userId={userId} joined={joined} userName={userName} />
      </div>
    );
  }

  render() {
    return (
      <div>
        Sort ideas:
        <DropDownMenu value={this.state.sort} onChange={this.handleChange}>
          <MenuItem value={'contentDsc'} primaryText="Content, a-z" />
          <MenuItem value={'contentAsc'} primaryText="Content, z-a" />
          <MenuItem value={'votesDsc'} primaryText="Most votes" />
          <MenuItem value={'votesAsc'} primaryText="Fewest votes" />
          <MenuItem value={'oldest'} primaryText="Oldest first" />
          <MenuItem value={'newest'} primaryText="Newest first" />
        </DropDownMenu>
        <FlipMove enterAnimation="fade" leaveAnimation="fade" duration={300} staggerDurationBy={100}>
          {this.props.board.ideas.map(this.renderIdea)}
        </FlipMove>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getOneBoard, sortIdeasByVotes, sortIdeasByContent, sortIdeasByTime }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaList);
