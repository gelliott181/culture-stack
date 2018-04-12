import React, { Component, PropTypes } from "react";
import {tagOptions} from "../common/";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card, Label } from "semantic-ui-react"; 
import PostCard from "../components/PostCard";
import API from "../utils/API";

const tagList = tagOptions;

export default class Browse extends Component  {
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
        })
        .catch(err => console.log(err));
    };

    handleTagChange = event => {
        console.log("tag changed");
        this.setState({
            browseFilter: event.target.name
        });
        console.log(this.state.browseFilter);
        console.log(this.state.posts);
    }
 
    render() {


    return (
        <Container>
        <Divider horizontal/>
            <Grid>
                <Grid.Column mobile={16} only="mobile">
                </Grid.Column>
                <Grid.Column mobile={16}>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={12} computer={12}><Divider horizontal>#{this.state.browseFilter}</Divider>
                    <Card.Group itemsPerRow={3}>
                    {this.state.posts.map(post => (
                        <PostCard key={post._id} post_url={`/posts/${post._id}`} name={post.title} author={post.author.username} author_url={`/users/${post.author._id}`} img_url={post.img_url} userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                        
                    ))}
                    </Card.Group>
                </Grid.Column>
                <Grid.Column only="tablet computer" tablet={4} computer={4}><Divider horizontal>Tags</Divider>
                    <div className="secondary-font">
                        <Label.Group color="teal" tag>
                        {tagList.map(tag => (
                            <Label as="a" name={tag.text} onClick={this.handleTagChange}>#{tag.text}</Label>
                        ))}
                        </Label.Group>
                    </div>
                    
                </Grid.Column>
                
            </Grid>
        </Container>
        )
    }
}