import axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import history from "../../history"
import { Grid, Divider, Button, Header, Image, Modal, Form, Input, Checkbox, Message, Menu } from 'semantic-ui-react'
import { update } from '../../services/withUser';

export default class SignInModal extends Component {
  state = {
    username: null,
    password: null,
    error: null,
    redirect: false
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    // clear any previous errors so we don't confuse the user
    this.setState({
      error: null
    });

    // check to make sure they've entered a username and password.
    // this is very poor validation, and there are better ways
    // to do this in react, but this will suffice for the example
    if (!username || !password) {
      this.setState({
        error: 'A username and password are required.'
      });
      return;
    }

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      console.log("logged in");
      // Callback to Nav to call handleSessionChange() and show user/logout items in Nav
      this.props.callbackSessionChange();
      history.push('/home');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid username or password.' : err.message
      });
    });
  }
  render() {
    const { error } = this.state;

    return (

      <Modal size="small" trigger={
        // <Button size="huge">Sign In</Button>
      <Menu.Item >Sign In</Menu.Item>
      }>

        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>
          <Grid stackable padded columns="equal">
            <Grid.Column>
            
              <Form error>

              {this.state.error &&
                <Message
                  error
                  header='Whoops!'
                  content={error}
                />
              }
              
                <Form.Field
                  control={Input}
                  name="username"
                  label="Username:"
                  onChange={this.handleInputChanged}
                />
              
                <Form.Field
                  control={Input}
                  name="password"
                  label="Password:"
                  type="password"
                  onChange={this.handleInputChanged}
                />
              
                <Divider hidden />
                <Button type="submit" onClick={this.handleLogin}>
                  Log In
                </Button>
              
              </Form>

            </Grid.Column>
            <Grid.Column width={1}>
              <Divider vertical>Or</Divider>
            </Grid.Column>
            <Grid.Column verticalAlign="middle" textAlign="center">
              <Header as="h2">
              <Link to="/register">Sign Up!</Link>
              </Header>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        

      </Modal>

    );
  }
}