import React, { Component, PropTypes } from 'react';
import ChatList from './chat_list';
import Users from './users';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';

import Badge from 'material-ui/Badge';
import { Tabs, Tab } from 'material-ui/Tabs';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble-outline';

const style = {
  float: 'left',
  position: 'absolute',
  marginLeft: '10%',
  marginTop: '28px',
};

export default class Chat extends Component {

  static propTypes = {
    params: PropTypes.object,
    getMessages: PropTypes.func,
    board: PropTypes.object,
    addMessage: PropTypes.func,
    chat: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
      open: false,
      messageCount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  // componentWillMount() {
  //   this.socket = io();
  //   this.socket.on('connect', () => {
  //
  //     this.socket.on('message', () => {
  //       this.state.messageCount++;
  //       console.log(this.state.messageCount);
  //       console.log('45', 'message received');
  //     });
  //   });
  // }

  componentWillMount() {
    this.socket = io();
    this.socket.on('connect', () => {
      this.socket.emit('subscribe', this.props.board.id);
      this.socket.on('message', () => {
        this.setState({ messageCount: this.state.messageCount += 1 });
      });
    });
  }

  componentDidUpdate() {
    // this.getDOMNode().scrollBottom = 0 ;
    const node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }

  componentWillUnmount() {
    this.socket.emit('unsubscribe', this.props.board.id);
  }

  handleChange(value) {
    this.setState({ ...this.state, value });
  }

  handleToggle() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  render() {
    return (
      <div>
        <Badge
          badgeStyle={{
            backgroundColor: '#FFC107',
          }}
          badgeContent={this.state.messageCount}
          primary={true}
        >
        <FloatingActionButton
          style={style}
          secondary
          onTouchTap={this.handleToggle}
        >
            <ChatBubble />
        </FloatingActionButton>
      </Badge>
        <Drawer
          style={{ overflowY: 'scroll' }}
          docked={false}
          width={400}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ ...this.state, open })}
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
          >
            <Tab label="Users" value="a" >
              <div>
                <Users {...this.props} />
              </div>
            </Tab>
            <Tab label="Chat" value="b">
              <div>
                <ChatList {...this.props} />
              </div>
            </Tab>
          </Tabs>
        </Drawer>
      </div>
    );
  }
}
