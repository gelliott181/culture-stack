import React, { Component, PropType } from "react";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card, Label, List } from "semantic-ui-react";
import { Tag } from '../components/Tag';
import UserCard from '../components/PostCard';
import RegisterModal from '../components/RegisterModal';
import {tagOptions} from "../common/";
import SignInModal from '../components/SignInModal';
import PostCard from "../components/PostCard";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import API from "../utils/API";

const homeBackgroundHero = {
  backgroundImage: "url(img/home-fluid.png)",
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  width: '100vw',
  marginTop: "-15px",
  zIndex: "2",
  alignItems: "center",
  color: "white"
}

const letterSpace = {
    letterSpacing: '6px',
    fontWeight: 'bold'
}



export default class Home extends Component  {

  state = {
        browseTags: [],
        browseFilter: "nature",
        posts: []
    }
     componentDidMount = () => {
        this.loadPosts();
    }

    loadPosts = () => {
        API.getPosts()
        .then(res => {
            this.setState({ posts: res.data })
            console.log(this.state.posts)
        })
        .catch(err => console.log(err));
    };
    
    render () {
 
        return <Grid stackable>
              <div fluid style={homeBackgroundHero}>
            <Segment textAlign="center" basic style={{ marginTop: "330px" }}>
                    <Header as="h2" inverted style={letterSpace}>CULTURE STACK</Header>
                    <p className={"secondary-font"}>
                      Share your photos. Learn and
                      collaborate. Join the culture today.
                    </p>
                  <Button size='big'><Link to="/register">Register</Link></Button>
                  <Divider hidden style={{flexDirection: "column", alignSelf: "flexEnd"}}><Icon name="angle down" size="big" inverted/> </Divider>
                </Segment>
              </div>
              <Grid.Row>
                  <Grid.Column width={16}>      
                  <Divider hidden></Divider>            
                  <Divider hidden></Divider>            
                  <Divider hidden></Divider>       
                      <Segment textAlign="center" basic color='teal' inverted padded='very'>
                        <div className={"secondary-font"}>
                      
                          <p>The worlds premeire photo sharing experience.</p>
                          <p>Share your image and get feedback from the world's top photographers.</p>
                          <p>Find content from others and learn more about the craft.</p>
                        </div>
                      </Segment> 
                  </Grid.Column>
              </Grid.Row>
              <Divider hidden></Divider>
              <Grid.Row>
                <Grid.Column computer={16} tablet={16} only="tablet computer" className={"social-media-icons"}>
                  <Divider hidden>
                    <Header as="h4" textAlign="center">
                      FIND THE CULTURE
                    </Header>
                  </Divider>
                  <Header as="h4" className={"social-media-icons"}>
                    <Icon name="twitter" size="big" />
                    <Icon name="facebook" size="big" />
                    <Icon name="instagram" size="big" />
                  </Header>
                  <Divider hidden>
                    <Header as="h4" className={"shrink-header-font"} textAlign="center">
                      WHAT'S THE CULTURE?
                    </Header>
                  </Divider>
                  <Divider hidden/>
                  <div className="help-module">
                    <Image src={"/img/branding.png"} size="tiny" className="ui" />
                    <span>
                      <a href="#">Learn More</a>
                    </span>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={16} style={{ margin: "10px"}}><Divider hidden><Header as="h4" textAlign="center">DISCOVER</Header></Divider>
                <Divider hidden/><Divider hidden/>
                     <Card.Group itemsPerRow={3} stackable>
                    {this.state.posts.map(post => (
                       <PostCard key={post._id} post_url={`/posts/${post._id}`} name={post.title} author={post.author.username} author_url={`/user/${post.author._id}`} img_url={post.img_url} userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                       ))}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column mobile={4} only="mobile" className={"social-media-icons"}>
                  <Divider horizontal>
                    <h4 className={"shrink-header-font"}>
                      FIND THE CULTURE
                    </h4>
                  </Divider>
                  <div className={"social-media-icons"}>
                    <Icon name="twitter" size="big" />
                    <Icon name="facebook" size="big" />
                    <Icon name="instagram" size="big" />
                  </div>
                  <Divider horizontal>
                    <Header as="h4" className={"shrink-header-font"}>
                      WHAT'S THE CULTURE?
                    </Header>
                  </Divider>
                  <div className={"help-module"}>
                    <Image src={"/img/branding.png"} size="tiny" className="ui" />
                    <span>
                      <a href="#">Learn More</a>
                    </span>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
     
    }
}

