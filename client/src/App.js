//Dependencies
import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import { withUser, update } from './services/withUser';

//Pages
import CreatePost from "./pages/CreatePost";
import ViewPost from "./pages/ViewPost";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Browse from "./pages/Browse";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import NotFoundPage from './pages/NotFoundPage';
import UserRegistration from "./pages/UserRegistration";
import NotLoggedIn from "./pages/NotLoggedIn";
import Logout from "./pages/Logout";

//Passport Protected Route
import ProtectedRoute from './components/ProtectedRoute';
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
    return (
        <div style={{backgroundColor: "#FFFBF8"}}>
          <Nav history />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/register" component={UserRegistration} />
              <ProtectedRoute exact path="/create" component={CreatePost} />
              <Route exact path="/login" component={NotLoggedIn} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/users/:userid" component={User} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/posts/:postid" component={ViewPost} />
              <Route exact path="/logout" component={Logout} />
              <Route component={NotFoundPage} />
            </Switch>
        </div>
    )
  }
}

export default withUser(App);