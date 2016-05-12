import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { receiveLogout } from '../actions/auth_actions';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import '../containers/styles/main.scss';

const styles = {
  title: {
    float: 'left',
  },
};

const paper = {
  minHeight: '620px',
  maxWidth: '100%',
  width: 1000,
  textAlign: 'center',
  display: 'block',
  margin: '0 auto',
};

const iconStyles = {
  height: 25,
  width: 25,
  margin: 10,
  display: 'inline-block',
  color: 'cyan50',
};

export default class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    receiveLogout: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.props.receiveLogout();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Paper style={paper} zDepth={4}>
            <AppBar
              title={<span style={styles.title}>Stormbraining</span>}
              iconElementLeft={<div />}
              iconElementRight={
                <Tabs>
                  <Tab
                    className="tabs-boards"
                    label="Home"
                    containerElement={<Link to="/" />}
                  />
                  <Tab
                    className="tabs-boards"
                    label="Boards"
                    containerElement={<Link to="/boards" />}
                  />
                  <Tab
                    className="tabs-logout"
                    label="Logout"
                    onClick={this.onLogout}
                    containerElement={<Link to="/login" />}
                  />
                </Tabs>
              }
            />
            {this.props.children}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default connect(null, { receiveLogout })(App);
