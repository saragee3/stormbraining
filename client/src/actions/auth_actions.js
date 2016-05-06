// import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SHOW_LOCK, LOCK_SUCCESS, LOCK_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './action_types';
//import Auth0Lock from 'auth0-lock';

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  };
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

// export function loginUser(creds) {

//   let config = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//     body: `username=${creds.username}&password=${creds.password}`,
//   };

//   return dispatch => {
//     dispatch(requestLogin(creds));

//     return fetch('http://localhost:3000/sessions/create', config)
//       .then(response =>
//         response.json().then(user => ({ user, response }))
//       ).then(({ user, response }) => {
//         if (!response.ok) {
//           // If there was a problem, we want to dispatch the error condition
//           dispatch(loginError(user.message));
//           return Promise.reject(user);
//         } else {
//           // If login was successful, set the token in local storage
//           localStorage.setItem('id_token', user.id_token);
//           dispatch(receiveLogin(user));
//         }
//       }).catch(err => console.log('Error: ', err));
//   };
// }

export function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
  };
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
  };
}

export function logoutUser() {
  let lock = new Auth0Lock('iGakh4fZgCCXIcn6M9Pe5lxsH3aFSaUY', 'nuggets.auth0.com');
  lock.logout({ ref: window.location.href });
  console.log(window.location.href);
}

  //   ((err, profile, token) => {
  //     if (err) {
  //       dispatch(lockError(err));
  //       return;
  //     }
  //   dispatch(requestLogout());
  //   localStorage.removeItem('id_token');
  //   dispatch(receiveLogout());
  //   });
  // };


  // return dispatch => {
  //   console.log(dispatch)
  //   dispatch(requestLogout());
  //   localStorage.removeItem('id_token');
  //   dispatch(receiveLogout());
  // };

// Auth Lock

export function showLock() {
  return {
    type: SHOW_LOCK,
  };
}

export function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token,
  };
}

export function lockError(err) {
  return {
    type: LOCK_ERROR,
    err,
  };
}


export function login() {

  let lock = new Auth0Lock('7knLLEidEQiUBihGrdb8GKVtNnfPF1A5', 'comparable.auth0.com');

    return dispatch => {
      lock.show((err, profile, token) => {
     // If we receive an error, we dispatch the lockError action
        if (err) {
          dispatch(lockError(err));
          return;
        }
        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', token);
        dispatch(lockSuccess(profile, token));
    });
  };
}

