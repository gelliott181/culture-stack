import React from "react";
import { Card, Image } from 'semantic-ui-react';

const UserCard = (props) => (
  <Card>
    <Card.Content>
      <Image floated="left" size="mini" src={props.userAvatar} circular />
      <Card.Header>{props.name}</Card.Header>
    </Card.Content>
    <Image src={props.userImage} />
    <Card.Content>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>{props.extra}</Card.Content>
  </Card>
);

export default UserCard;