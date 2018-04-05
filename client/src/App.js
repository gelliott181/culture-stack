//Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import CreatePost from "./pages/CreatePost";
import LoginPage from './pages/passportTesting/LoginPage';
import RegisterUser from './pages/passportTesting/RegisterUser';
import NotFoundPage from './pages/NotFoundPage';

import { withUser, update } from './services/withUser';


class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    // const { user } = this.props;
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/create" component={RegisterUser} />
          <Route exact path="/upload" component={CreatePost} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default withUser(App);
