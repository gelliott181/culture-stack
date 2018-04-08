import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Image, Modal, Form, Input, Checkbox, Message } from 'semantic-ui-react'

export default class SignInModal extends {Component} {
  state = {
    username: null,
    password: null
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // post an auth request
    axios.post('/api/auth', {
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
      history.push('/');
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
      <Modal dimmer={'inverted'} trigger={<Button size="huge">Modal</Button>}>

        <Modal.Header>Sign In</Modal.Header>
        <Modal.Content>

        </Modal.Content>
      </Modal>

    );
  }
}