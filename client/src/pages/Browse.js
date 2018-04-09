import React, { Component, PropTypes } from "react";
import { Grid, Container, Image, Divider, Item, Icon, Button, Segment, Header, Card } from "semantic-ui-react"; 
import UserCard from "../components/UserCard";



export default class Browse extends Component  {
    state = {
        tag: "nature"
    }

    handleTagChange = event => {
        this.setState({
            tag: event.target.name
        })
    }
 
    render() {


    return (
        <Container>
        <Divider horizontal/>
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} only="mobile">
                        <Header as="h2">Tags</Header>
                        <div className="secondary-font">
                            <span>#nature </span>
                            <span>#landscape </span>
                            <span>#fashion </span>
                            <span>#nature </span>
                            <span>#landscape </span>
                            <span>#fashion </span>
                            <span>#fashion </span>
                            <span>#fashion </span>
                            <span>#fashion </span>
                        </div>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={12} computer={12}><Divider horizontal>#{this.state.tag}</Divider></Grid.Column>
                    <Grid.Column only="table computer" tablet={4} computer={4}><Divider horizontal>Tags</Divider></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={4} computer={4}>
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />                
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={4} computer={4}>
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />                
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={4} computer={4}>
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />                
                    <UserCard name="Test" userImage="/img/default_placeholder.png" userAvatar="img/default_avatar.jpg" description="description" extra="Extra" />
                </Grid.Column>
                    <Grid.Column only="table computer"tablet={4} computer={4}>
                    <button name="tag" onClick={this.handleTagChange}>TEST</button>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        )
    }
}