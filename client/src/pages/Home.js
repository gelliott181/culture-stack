import React, { Component } from "react";
import { Grid, Container, Image, Divider, Item, Icon } from "semantic-ui-react";

export default class Home extends Component  {
    render () {
        return <Container>
            <Grid columns={3}>
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
                  <div className="hero">
                    <Image src={"img/default_home.jpeg"} fluid />
                  </div>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Divider horizontal>T A G S</Divider>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>;
    }
}

