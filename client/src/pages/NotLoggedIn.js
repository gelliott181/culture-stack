import React, {Component} from 'react';
import { Divider, Container, Message } from 'semantic-ui-react';


export default class NotLoggedIn extends Component {

  render() {
    
    return(
      <Container>
        <Divider hidden />
        <Message warning>
          <Message.Header>
            You're not logged in!
          </Message.Header>
          Please log in  via the menu in the right hand corner before submitting a post.
        </Message >
        <Divider hidden />
      </Container>
    );
  }
}