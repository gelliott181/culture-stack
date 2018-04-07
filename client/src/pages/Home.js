import React, { Component } from "react";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card } from "semantic-ui-react";
import { Tag } from '../Components/Tag';

export default class Home extends Component  {
    render () {
        return <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Divider horizontal>FIND THE CULTURE</Divider>
                  <div className="social-media-icons">
                    <Icon name="twitter" size="big" />
                    <Icon name="facebook" size="big" />
                    <Icon name="instagram" size="big" />
                  </div>
                  <Divider horizontal>WHAT'S THE CULTURE?</Divider>
                  <div className="help-module">
                    <Image src={"/img/branding.png"} size="tiny" className="ui" />
                    <span>
                      <a href="#">Learn More</a>
                    </span>
                  </div>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Divider horizontal>F E E D</Divider>
                  <div className={"hero"}>
                    <Image src={"img/default_home.jpeg"} fluid />
                  </div>
                  <Segment textAlign="center" basic>
                    <Header as="h2">CULTURE STACK</Header>
                    <p className={"secondary-font"}>
                      Share your photos and music. Learn and
                      collaborate. Join the culture today.
                    </p>
                    <Button size="huge">Sign Up</Button>
                  </Segment>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Divider horizontal>T A G S</Divider>
                  <Tag>test</Tag>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div>
              <Divider horizontal>
                <Icon name="angle down" size="big" />
              </Divider>
            </div>
          </Container>;
    }
}

