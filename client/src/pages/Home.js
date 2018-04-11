import React, { Component } from "react";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card } from "semantic-ui-react";
import { Tag } from '../components/Tag';
import UserCard from '../components/PostCard';
import RegisterModal from '../components/RegisterModal';
import SignInModal from '../components/SignInModal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const homeBackgroundHero = {
  backgroundImage: "url('img/default_home.jpeg')",
  backgroundSize: "cover"
}

const letterSpace = {
    letterSpacing: '6px',
    fontWeight: 'bold'
}

export default class Home extends Component  {
    render () {
        return <Grid  container fluid stackable>
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
                      <Segment textAlign="center" basic>
                    <Header as="h2">CULTURE STACK</Header>
                    <p className={"secondary-font"}>
                      Share your photos and music. Learn and
                      collaborate. Join the culture today.
                    </p>
                  <Button size='big'><Link to="/register">Register</Link></Button>
                  </Segment>
                  </div>
                </Grid.Column>
                <Grid.Column width={3} only="tablet computer">
                  <Divider horizontal>T A G S</Divider>
                   <Tag>landscape</Tag>
                   <Tag>nature</Tag>
                   <Tag>lowLight</Tag>
                   <Tag>motion</Tag>
                   <Tag>film</Tag>
                   <Tag>beach</Tag>
                   <Tag>portraits</Tag>
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
            <div>
              <Divider horizontal>
                <Icon name="angle down" size="big" />
              </Divider>
            </div>
              </Grid.Row>
            </Grid>
    }
}

