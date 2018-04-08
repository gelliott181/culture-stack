import React, { Component } from 'react'
import { Grid, Divider, Header, Image, Form, Input, Radio, Dropdown, TextArea, Button, Comment, Segment } from 'semantic-ui-react';
import { tagOptions } from '../common';
import API from "../utils/API";


export default class ViewPost extends Component {

state = {
    post: {}
}

componentDidMount() {
    API.getPost(this.props.match.params.postid)
    .then(res => this.setState ({post: res.data}))
    .catch(err => console.log(err));
}
  
   render () {

   

   return (
        <Grid container stackable doubling>
            <Grid.Row>
                <Grid.Column>
                    <Divider horizontal>
                        <Header as="h2">{this.state.post.title}</Header>
                    </Divider>
                    <Image src="../img/default_placeholder.png" size="huge"/>
                </Grid.Column>
            </Grid.Row>

                <Grid.Column>
                  <Divider hidden/>
                   <Divider horizontal>
                       <Header as="h3">PHOTO DETAILS</Header>
                       <Segment.Group horizontal attached="bottom">
                            <Segment>Aperature</Segment>
                           <Segment>ISO</Segment>
                           <Segment>Shutter Speed</Segment>
                       </Segment.Group>
                   </Divider>
                </Grid.Column>
            <Grid.Row>
               <Grid.Column mobile={16} tablet={4} computer={12}>
                   <Comment.Group fluid>
                       <Header as='h3' dividing>Comments</Header>

                       <Comment>
                           <Comment.Avatar src='../img/default_avatar.jpg' />
                           <Comment.Content>
                               <Comment.Author as='a'>Matt</Comment.Author>
                               <Comment.Metadata>
                                   <div>Today at 5:42PM</div>
                               </Comment.Metadata>
                               <Comment.Text>How artistic!</Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                       </Comment>
                   <Comment>
                       <Comment.Avatar src='../img/default_avatar.jpg' />
                       <Comment.Content>
                           <Comment.Author as='a'>Matt</Comment.Author>
                           <Comment.Metadata>
                               <div>Today at 5:42PM</div>
                           </Comment.Metadata>
                           <Comment.Text>How artistic!</Comment.Text>
                           <Comment.Actions>
                               <Comment.Action>Reply</Comment.Action>
                           </Comment.Actions>
                       </Comment.Content>
                   </Comment>
                       <Comment>
                           <Comment.Avatar src='../img/default_avatar.jpg' />
                           <Comment.Content>
                               <Comment.Author as='a'>Elliot Fu</Comment.Author>
                               <Comment.Metadata>
                                   <div>Yesterday at 12:30AM</div>
                               </Comment.Metadata>
                               <Comment.Text>
                                   <p>This has been very useful for my research. Thanks as well!</p>
                               </Comment.Text>
                               <Comment.Actions>
                                   <Comment.Action>Reply</Comment.Action>
                               </Comment.Actions>
                           </Comment.Content>
                           <Comment.Group>
                               <Comment>
                                   <Comment.Avatar src='../img/default_avatar.jpg' />
                                   <Comment.Content>
                                       <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                       <Comment.Metadata>
                                           <div>Just now</div>
                                       </Comment.Metadata>
                                       <Comment.Text>
                                           Elliot you are always so right :)
                                       </Comment.Text>
                                       <Comment.Actions>
                                           <Comment.Action>Reply</Comment.Action>
                                       </Comment.Actions>
                                   </Comment.Content>
                               </Comment>
                           </Comment.Group>
                       </Comment>
                </Comment.Group>
                   <Form reply>
                       <Form.TextArea />
                       <Button content='Comment' labelPosition='left' icon='edit' primary />
                   </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
     
        );
    }
}