import React, { Component } from 'react';
import {Container, Message, Divider} from 'semantic-ui-react';

class NotFoundPage extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Divider hidden/>
        <Divider horizontal>
          Well... this is awkward
        </Divider>
        <Divider hidden/>
        <Message color='yellow' textAlign='center'>
          <Message.Header >404</Message.Header>
          Page not found.
        </Message>
      </Container>
    );
  }
}

export default NotFoundPage;
