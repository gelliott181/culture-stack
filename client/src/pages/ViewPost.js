import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Divider, Header, Image, Form, Input, Radio, Dropdown, TextArea, Button, Comment, Segment, Icon, Statistic, Popup, Container, Message} from 'semantic-ui-react';
import { tagOptions } from '../common';
import PostComment from '../components/PostComment';
import API from "../utils/API";


export default class ViewPost extends Component {

    state = {
        post: "",
        author: "",
        comments: [],
        newComment: "",
        commentObject: "",
        sessionUser: ""
    }

    componentDidMount = () => {
        this.loadPost();
    }

    loadPost = () => {
        API.getPost(this.props.match.params.postid)
        .then(res => {
            this.setState({post: res.data});
            console.log(this.state.post)
            this.setState({
                author: this.state.post.author,
                comments: this.state.post.comments,
                sessionUser: JSON.parse(sessionStorage.getItem('user'))
            })
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleCommentSubmit = (event) => {
        if (this.state.newComment){
            console.log(this.state.sessionUser.username);
            console.log(this.state.newComment);
            
            API.createComment(this.state.post._id, {
                author_id: this.state.sessionUser.id,
                author: this.state.sessionUser.username,
                body: this.state.newComment
            })
            .then(res => {
                this.setState({
                    newComment: ""
                });
                this.loadPost();
            })
            .catch(err => console.log(err));
        }
    }
  
   render () {

   return (
        <Grid container>
            <Grid.Row stackable>
               <Grid.Column mobile={16} tablet={10} computer={10} floated="left">
                    <Divider hidden/>
                    <Image className={"box-shadow-img"} src={this.state.post.img_url} size="huge"/>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={6} computer={6} floated="left">
                    <Divider horizontal><Header as="h3" textAlign="center" color="yellow">{this.state.post.QP}</Header></Divider>
                    <Header as="h3" textAlign="center">
                        {this.state.post.title}
                    <Header.Subheader>by <Link to={`/users/${this.state.author._id}`}>{this.state.author.username}</Link></Header.Subheader>
                    </Header>
                        <Segment.Group>
                            <Segment textAlign="center">
                                <Header as="h5">Aperture</Header>
                                    f/{this.state.post.aperture}
                            </Segment>
                            <Segment textAlign="center">
                                <Header as="h5">ISO</Header>
                                    {this.state.post.iso}
                                </Segment>
                            <Segment textAlign="center">
                                <Header as="h5">Shutter Speed</Header>
                                    {this.state.post.speed}
                                </Segment>
                        </Segment.Group>
                       <Header as="h4" textAlign="center">GEAR</Header>
                       <Segment.Group vertical>
                           <Segment textAlign="center"><Icon name="camera"></Icon>{this.state.post.camera}</Segment>
                           <Segment textAlign="center"><Icon name="camera retro"></Icon>{this.state.post.lens}</Segment>
                       </Segment.Group> 
                   <div className={"negative-margin-column"}>
                       <Header as="h5" textAlign="center">DESCRIPTION</Header>
                       <Segment fluid>
                           <p>{this.state.post.body}</p>
                       </Segment>
                   </div>
                </Grid.Column>
               </Grid.Row>
            <Grid.Row>

            <Grid.Column mobile={16} tablet={12} computer={12}>
                <Comment.Group fluid>
                    <Header as='h3' dividing>Comments</Header>

                        {this.state.comments.map(comment => (
                            <div>
                                <PostComment author_id={comment.author_id} author={comment.author} body={comment.body} />
                                <Divider horizontal />
                            </div>
                        ))}

                </Comment.Group>

                <Header as='h4' dividing>Leave a Comment</Header>   
                {this.state.sessionUser ? (
                   
                   <Form reply>
                       <Form.TextArea name="newComment" value={this.state.newComment} onInput={this.handleInputChange} />
                       <Button content='Comment' type='submit' onClick={this.handleCommentSubmit} labelPosition='left' icon='edit' primary style={{backgroundColor: "#2688FF"}} />
                   </Form>
                    ) : (
                    <Message warning>You must be signed in to leave comments!</Message>
                )}
                </Grid.Column>
            
            </Grid.Row>
        </Grid>
        );
    }
}