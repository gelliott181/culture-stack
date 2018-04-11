import React, { Component } from 'react'
import { Grid, Divider, Header, Image, Form, Input, Radio, Dropdown, TextArea, Button, Comment, Segment, Icon, Statistic, Popup, Container} from 'semantic-ui-react';
import { tagOptions } from '../common';
import API from "../utils/API";


export default class ViewPost extends Component {


componentDidMount() {
    API.getPost(this.props.match.params.postid)
    .then(res => this.setState ({post: res.data}))
    .catch(err => console.log(err));
}
  
   render () {

   

   return (
        <Grid container>
            <Grid.Row stackable>
               <Grid.Column mobile={16} tablet={10} computer={10} floated="left">
                    <Divider hidden/>
                    <Image className={"box-shadow-img"} src="../img/default_placeholder.png" size="huge"/>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={6} computer={6} floated="left">
                   <Divider horizontal><Header as="h3" textAlign="center" color="yellow">Question</Header></Divider>
                   <Header as="h4" textAlign="center">POST TITLE</Header>
                        <Segment.Group>
                            <Segment textAlign="center">
                                <Header as="h5">Aperature</Header>
                                    Data
                            </Segment>
                            <Segment textAlign="center">
                            <Header as="h5">ISO</Header>
                                    Data
                            </Segment>
                            <Segment textAlign="center">
                            <Header as="h5">Shutter Speed</Header>
                                    Data
                            </Segment>
                        </Segment.Group>
                       <Header as="h4" textAlign="center">GEAR</Header>
                       <Segment.Group vertical>
                           <Segment textAlign="center"><Icon name="camera"></Icon>Camera</Segment>
                           <Segment textAlign="center"><Icon name="camera retro"></Icon>Lens</Segment>
                       </Segment.Group> 
                </Grid.Column>  
               </Grid.Row>
               <Grid.Row>
                <Grid.Column mobile={16} tablet={16} computer={6} floated="right">
                    <div className={"negative-margin-column"}>
                        <Header as="h5" textAlign="center">DESCRIPTION</Header>
                        <Segment fluid>
                            <p>This is text and aegiaetioae a odaigadsgohdg opidjg poihdasg poihsdg poiashdg poiajsdg poihadg poihdgasdghasdgoiasdgoiajdg oiajdgpoiadghapodihg</p>
                        </Segment>   
                    </div>
                </Grid.Column>
               </Grid.Row>
            <Grid.Row>
               <Grid.Column mobile={16} tablet={12} computer={12}>
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
                       <Button content='Comment' labelPosition='left' icon='edit' primary style={{backgroundColor: "#2688FF"}} />
                   </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}