import React from "react";
import { Card, Image, Grid } from 'semantic-ui-react';

const UserCard = (props) => (
    <Card fluid>
      <Card.Content>  
        <Image floated="left" size="mini" src={props.userAvatar} circular />
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
      <Image className="card-image" />
      <Card.Content>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>{props.extra}</Card.Content>
    </Card>
);

export default UserCard;