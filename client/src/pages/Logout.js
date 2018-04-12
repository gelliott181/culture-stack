import React, { Component } from 'react';
import {Container, Message, Divider} from 'semantic-ui-react';

class Logout extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Divider hidden/>
        <Divider horizontal>
          Thanks for stopping by!
        </Divider>
        <Divider hidden/>
        <Message color='green' textAlign='center'>
          <Message.Header > You are logged out</Message.Header>
          
        </Message>
      </Container>
    );
  }
}

export default Logout;
