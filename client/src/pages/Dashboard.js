import React, { Component } from "react";
import { Container, Segment, Grid, Image, Divider, List, Icon } from "semantic-ui-react";
import PostCard from '../components/PostCard';

export default class User extends Component {
    render() {

        return (
            <Container>
                <Divider horizontal />
                <Segment>
                    <Grid stackable>
                        <Grid.Column mobile={16} tablet={4} computer={8}>
                            <Image src="img/default_avatar.jpg" size="medium" avatar right/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={12} computer={8}>
                            <Divider horizontal>
                                <h2>NAME</h2>
                            </Divider>
                            <div textAlign="center" style={{padding:"5px"}}>
                            </div>
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
                                            <Icon name="users" /> Company
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="marker" /> Location
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="mail" />email@email.com
                                        </List.Item>
                                        <List.Item>
                                            <Icon name="mail" /> website.com
                                        </List.Item>
                                        </List>
                                    </Grid.Column> 
                                </Grid>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                             <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                             <Grid.Column mobile={16} tablet={8} computer={4}>
                                <PostCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                            </Grid.Column>
                </Grid>
            </Container>
        );
    }
}