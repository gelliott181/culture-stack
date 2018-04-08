import React, { Component } from "react";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card } from "semantic-ui-react";
import { Tag } from '../components/Tag';
import UserCard from '../components/UserCard';
import RegisterModal from '../components/RegisterModal';

export default class Home extends Component  {
    render () {
        return <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column computer={3} only="tablet computer" className={"social-media-icons"}>
                  <Divider horizontal>
                    <h4 className={"shrink-header-font"}>
                      FIND THE CULTURE
                    </h4>
                  </Divider>
                  <div className="social-media-icons">
                    <Icon name="twitter" size="big" />
                    <Icon name="facebook" size="big" />
                    <Icon name="instagram" size="big" />
                  </div>
                  <Divider horizontal>
                    <h4 className="shrink-header-font">
                      WHAT'S THE CULTURE?
                    </h4>
                  </Divider>
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
                    <Button size="huge">Sign up</Button>
                    <RegisterModal />
                  </Segment>
                </Grid.Column>
                <Grid.Column width={3} only="tablet computer">
                  <Divider horizontal>T A G S</Divider>
                  <Tag>test</Tag>
                </Grid.Column>
                <Grid.Column mobile={3} only="mobile" className={"social-media-icons"}>
                  <Divider horizontal>
                    <h4 className={"shrink-header-font"}>
                      FIND THE CULTURE
                    </h4>
                  </Divider>
                  <div className="social-media-icons">
                    <Icon name="twitter" size="big" />
                    <Icon name="facebook" size="big" />
                    <Icon name="instagram" size="big" />
                  </div>
                  <Divider horizontal>
                    <h4 className="shrink-header-font">
                      WHAT'S THE CULTURE?
                    </h4>
                  </Divider>
                  <div className="help-module">
                    <Image src={"/img/branding.png"} size="tiny" className="ui" />
                    <span>
                      <a href="#">Learn More</a>
                    </span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div>
              <Divider horizontal>
                <Icon name="angle down" size="big" />
              </Divider>
            </div>
            <Grid>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={4}>
              <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
              </Grid.Column>
            </Grid>
          </Container>;
    }
}

