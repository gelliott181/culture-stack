import React, { Component } from "react";
import { Container, Segment, Grid, Image, Divider, TextArea, Form, List, Icon, Message } from "semantic-ui-react";
import PostCard from '../components/PostCard';
import API from '../utils/API';


export default class User extends Component {

    state = {
        user: ""
    }

    componentDidMount = () => {
        API.getUser(this.props.match.params.userid)
        .then(res => this.setState({user: res.data}))
        .catch(err => console.log(err));
    }

    render() {

        return (
            <Container>
                <Divider horizontal />
                <Segment>
                    <Grid columns={"2"}>
                        <Grid.Column mobile={16} tablet={9} computer={8}>
                            <Image src="/img/default_avatar.jpg" size="medium" avatar />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={9} computer={8}>
                            <Divider horizontal>
                                <h2>{this.state.user.username}</h2>
                            </Divider>
                            <Message>This user has not updated their bio yet.</Message>
                            <Container>
                                <Divider />
                                <Grid columns={"2"}>
                                    <Grid.Column>
                                        <h4>Gear</h4>
                                        <List>
                                            <List.Item>
                                                <Icon name="camera retro" />Camera
                                            </List.Item>
                                            <List.Item>
                                                <Icon name="photo" />Lens
                                            </List.Item>
                                            <List.Item>
                                                <Icon name="certificate" />Style
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <h4>Name</h4>
                                        <List>
                                            <List.Item>
                                                <Icon name="users" /> {this.state.user.occupation}
                                            </List.Item>
                                            <List.Item>
                                                <Icon name="mail" /> {this.state.user.email}
                                            </List.Item>  
                                        </List>
                                    </Grid.Column> 
                                </Grid>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Container>
        );
    }
}