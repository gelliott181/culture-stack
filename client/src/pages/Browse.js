import React, { Component } from "react";
import {tagOptions} from "../common/";
import { Grid, Container, Divider, Card, Label } from "semantic-ui-react"; 
import PostCard from "../components/PostCard";
import API from "../utils/API";

const tagList = tagOptions;

export default class Browse extends Component  {
    state = {
        browseTags: [],
        browseFilter: "",
        posts: [],
        filteredPosts: []
    }

    componentDidMount = () => {
        this.loadPosts();
    }

    handlePostFilter = () => {
        let filteredPosts = this.state.posts.filter(post => post.tags.includes(this.state.browseFilter));
        this.setState({
            filteredPosts: filteredPosts
        })
    }

    handleFilterReset = () => {
        this.setState({
            browseFilter: "",
            filteredPosts: this.state.posts
        })
    }

    loadPosts = () => {
        API.getPosts()
        .then(res => {
            this.setState({ 
                posts: res.data,
                filteredPosts: res.data
            });
        })
        .catch(err => console.log(err));
    };

    handleTagChange = event => {
        this.state.browseFilter = event.target.name;
        console.log(this.state.browseFilter);
        this.handlePostFilter();
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
                <Grid.Column mobile={16} tablet={12} computer={12}><Divider horizontal>#{this.state.browseFilter ? (this.state.browseFilter) : ("All Posts")}</Divider>
                    <Card.Group itemsPerRow={3} stackable>
                    
                    {this.state.filteredPosts.map(post => (
                        <PostCard key={post._id} post_url={`/posts/${post._id}`} name={post.title} author={post.author.username} author_url={`/users/${post.author._id}`} img_url={post.img_url} userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                        
                    ))}

                    </Card.Group>
                </Grid.Column>
                <Grid.Column only="tablet computer" tablet={4} computer={4}><Divider horizontal>Tags <Label tag size="mini" as="a" onClick={this.handleFilterReset} color="yellow" floated="right">Reset</Label></Divider>
                    
                    <div>
                        <Label.Group color="teal" tag>
                        {tagList.map(tag => (
                            <Label as="a" key={tag.key} name={tag.text} onClick={this.handleTagChange}>#{tag.text}</Label>
                        ))}
                        </Label.Group>
                    </div>
                    
                </Grid.Column>
                
            </Grid>
        </Container>
        )
    }
}