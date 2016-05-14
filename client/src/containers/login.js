import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginButton from './login_button';

import { muiTheme } from '../components/app.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Idea from 'material-ui/svg-icons/action/lightbulb-outline';
import Subject from 'material-ui/svg-icons/action/subject';
import Group from 'material-ui/svg-icons/social/group';
import './styles/main.scss';

const style = {
  nav: {
    height: '15%',
    minWidth: '100%',
    top: 0,
    position: 'fixed',
    zIndex: '9999999',
  },
  first: {
    paddingTop: '5%',
    height: '400px',
    minWidth: '100%',
    textAlign: 'center',
    backgroundColor: muiTheme.palette.primary3Color,
    h1: {
      color: '#fff',
      marginTop: '8%',
      fontSize: '48px',
      position: 'relative',
    },
  },
  break: {
    height: '15%',
    minWidth: '100%',
    marginTop: '-1.7%',
    position: 'relative',
    h1: {
      textAlign: 'center',
      top: 10,
      position: 'relative',
    },
  },
  second: {
    paddingTop: '3%',
    marginTop: '-1.7%',
    height: '650px',
    minWidth: '100%',
    backgroundColor: muiTheme.palette.primary3Color,
    position: 'block',
    subject: {
      marginTop: '3%',
      marginLeft: '5%',
      width: '100px',
      height: '100px',
      backgroundColor: muiTheme.palette.accent1Color,
    },
    h1: {
      marginTop: '-5%',
      fontWeight: 500,
      fontSize: '250%',
      textAlign: 'right',
      marginRight: '5%',
    },
    h2: {
      fontWeight: 100,
      fontSize: '100%',
      textAlign: 'right',
      marginRight: '5%',
    },
  },
  third: {
    paddingTop: '3%',
    height: '600px',
    minWidth: '100%',
    backgroundColor: muiTheme.palette.primary3Color,
    team: {
      marginTop: '3%',
      marginLeft: '7%',
    },
    text: {
      textAlign: 'center',
      marginLeft: '25%',
      fontSize: '18px',
    },
  },
};

const svgIcon = {
  width: 60,
  height: 60,
  textAlign: 'center',
  marginTop: 17,
};

class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div>
          <div>
            <Paper style={style.nav} zDepth={2}>
              <div className="login-title">
              <span className="title">Stormbraining</span>
              <LoginButton
                isAuthenticated={isAuthenticated}
                errorMessage={errorMessage}
                dispatch={dispatch}
              />
              </div>
            </Paper>
          </div>
          <Paper style={style.first} zDepth={1}>
            <h1 style={style.first.h1}>Make it. Brain.</h1>
          </Paper>
          <Paper style={style.break} zDepth={2}>
            <h1 style={style.break.h1}>How To</h1>
          </Paper>
          <Paper style={style.second} zDepth={1}>
            <div style={{ marginTop: '1.5%' }}>
              <Avatar
                style={style.second.subject}
                icon={<Subject style={svgIcon}/>}
              />
              <h1 style={style.second.h1}>Create a Board</h1>
              <h2 style={style.second.h2}> Pan friend pork dumpling. Deep fried bean curd skin rolls rice noodle roll deep fried crab claw soup dumpling cold chicken claw</h2>
            </div>
            <div style={{ marginTop: '1.5%' }}>
              <Avatar
                style={style.second.subject}
                icon={<Group style={svgIcon}/>}
              />
              <h1 style={style.second.h1}>Invite a friend!</h1>
              <h2 style={style.second.h2}> Pan friend pork dumpling. Deep fried bean curd skin rolls rice noodle roll deep fried crab claw soup dumpling cold chicken claw</h2>
            </div>
            <div style={{ marginTop: '1.5%' }}>
              <Avatar
                style={style.second.subject}
                icon={<Idea style={svgIcon}/>}
              />
              <h1 style={style.second.h1}>Real-time collaborative thinking</h1>
              <h2 style={style.second.h2}>Chicken feet Potstickers stir fried radish cake Steamed Bun with Butter Cream hot raw fish slices</h2>
            </div>
          </Paper>
          <Paper style={style.break} zDepth={2}>
            <h1 style={style.break.h1}>The Team</h1>
          </Paper>
          <Paper style={style.third} zDepth={1}>
            <Table>
              <TableBody style={style.third} displayRowCheckbox={false}>
                <TableRow displayBorder={false}>
                  <TableRowColumn>
                    <Avatar
                      src="./src/containers/styles/kevin.jpg"
                      size={200}
                      style={style.third.team}
                    />
                    <br />
                    <span style={style.third.text}>Kevin Chen</span>
                    <br />
                    <span style={style.third.text}>Product Owner</span>
                    <br />
                    <span style={style.third.text}>Full-Stack Software Engineer</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <Avatar
                      src="./src/containers/styles/frances.jpg"
                      size={200}
                      style={style.third.team}
                    />
                    <br />
                    <span style={style.third.text}>Frances Swiecki</span>
                    <br />
                    <span style={style.third.text}>Scrum Master</span>
                    <br />
                    <span style={style.third.text}>Full-Stack Software Engineer</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <Avatar
                      src="./src/containers/styles/david.jpg"
                      size={200}
                      style={style.third.team}
                    />
                    <br />
                    <span style={style.third.text}>David Nguyen</span>
                    <br />
                    <br />
                    <span style={style.third.text}>Full-Stack Software Engineer</span>
                  </TableRowColumn>
                  <TableRowColumn>
                    <Avatar
                      src="./src/containers/styles/sara.jpg"
                      size={200}
                      style={style.third.team}
                    />
                    <br />
                    <span style={style.third.text}>Sara Gee</span>
                    <br />
                    <br />
                    <span style={style.third.text}>Full-Stack Software Engineer</span>
                  </TableRowColumn>
                </TableRow>
              </TableBody>
            </Table>
            <Table style={{ marginTop: '4%' }}>
              <TableBody style={style.third} displayRowCheckbox={false}>
                <TableRow>
                  <img
                    src="./src/containers/styles/react-logo.svg"
                    style={{ marginLeft: '2%' }}
                  />
                  <img
                    src="./src/containers/styles/express.png"
                    style={{ marginLeft: '2%' }}
                  />
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps({ auth }) {
  const { isAuthenticated, errorMessage } = auth;
  return {
    isAuthenticated,
    errorMessage,
  };
}

export default connect(mapStateToProps)(Login);
