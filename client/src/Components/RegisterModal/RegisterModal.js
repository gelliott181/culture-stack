import axios from 'axios';
import React, { Component } from 'react';
import { Button, Header, Image, Modal, Form, Input, Checkbox, Message } from 'semantic-ui-react'


class RegisterModal extends Component {
  state = {
    username: null,
    password: null,
    // firstname: null,
    // lastname: null,
    // email: null,
    // occupation: null,
    error: null
  }  
  
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

    // console.log(this.state);
  }
  
  handleLogin = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

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
    axios.post('/api/users', {
      username,
      password
    })
      .then(user => {
        // if the response is successful, make them log in
        history.push('/my-profile');
        console.log(user);
      })
      .catch(err => {

        this.setState({
          error: err.response.data.message || err.message
        });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <Modal  trigger={<Button size="huge">Register</Button>}>

        <Modal.Header>Register Your Account</Modal.Header>
        <Modal.Content>
          <Form error>
            <Form.Group widths='equal'>
              <Form.Input fluid
                name="username"
                onChange={this.handleInputChanged}
                placeholder='Username'
                label='Username'
              />
              <Form.Input fluid
                name="password"
                onChange={this.handleInputChanged}
                type="password"
                label='Password'
                placeholder='Password'
              />
            </Form.Group>
            {error &&
              <Message
                error
                header='Whoops!'
                content={error}
              />
            }
            <Form.Field>
              <Form.Input fluid
                  name="email"
                  onChange={this.handleInputChanged}
                  label='Email Address'
                  placeholder='john.smith@gmail.com'
                />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Input fluid 
                label='First name' 
                placeholder='John'
                name='firstname' 
                onChange={this.handleInputChanged}
              />
              <Form.Input fluid 
                label='Last name' 
                placeholder='Smith' 
                name='lastname'
                onChange={this.handleInputChanged}
              />
              <Form.Input 
                fluid 
                label='Occupation' 
                placeholder='Occupation' 
                name='occupation'
                onChange={this.handleInputChanged}
              />
            </Form.Group>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <Button type='submit' onClick={this.handleLogin}>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default RegisterModal;