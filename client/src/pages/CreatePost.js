import React, { Component } from 'react'
import { Grid, Divider, Header, Image, Form, Input, Radio, Dropdown, TextArea, Button } from 'semantic-ui-react';

import { tagOptions } from '../common';
import API from "../utils/API";


export default class CreatePost extends Component {
    
    state = {
        img_file: null,
        aperture: "",
        iso: "",
        speed: "",
        camera: "",
        lens: "",
        title: "",
        QP: "",
        body: "",
        tags: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFileChange = event => {
        this.setState({img_file: event.target.files[0]});
    };

    handleQPChange = (event, { value }) => this.setState({ QP: value });

    handleTagsChange = (event, { value }) => this.setState({ tags: value });

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.img_file && this.state.title && this.state.QP && this.state.body){
            let formData = new FormData();
            formData.append("aperture", this.state.aperture);
            formData.append("iso", this.state.iso);
            formData.append("speed", this.state.speed);
            formData.append("camera", this.state.camera);
            formData.append("lens", this.state.lens);
            formData.append("title", this.state.title);
            formData.append("QP", this.state.QP);
            formData.append("body", this.state.body);
            formData.append("tags", this.state.tags);
            formData.append("img_file", this.state.img_file);
            
            API.uploadImage(formData)
            .then(res => {
                this.setState({img_file: null});
            })
            .catch(err => console.log(err));
        }
    }

  render() {
    return (
        <Grid container stackable doubling columns={2} divided="vertically">

            <Grid.Column>
                <Divider horizontal>
                    <Header as="h1">Submit your post</Header>
                </Divider>
                    <Image src="./img/default_placeholder.png" />
                
                <Form>
                    <Form.Field>
                        <Input icon="camera" iconPosition="left" name="img_file" type="file" onChange={this.handleFileChange} />
                    </Form.Field>
                </Form>
            </Grid.Column>
            
            <Grid.Column>
                <Form>
                    <Divider hidden />
                    <Divider horizontal>Photo Details</Divider>
                    <Form.Group  widths="equal" widths={3}>
                        <Form.Field control={Input} name="aperture" id="aperture-field" placeholder="Aperture" onChange={this.handleInputChange} />
                        <Form.Field control={Input} name="iso" id="iso-field" placeholder="ISO" onChange={this.handleInputChange} />
                        <Form.Field control={Input} name="speed" id="speed-field" placeholder="Shutter Speed" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group widths="equal" label="Gear">
                        <Form.Field control={Input} name="camera" placeholder="Camera" icon="retro camera" iconPosition="left" onChange={this.handleInputChange} />
                        <Form.Field control={Input} name="lens" placeholder="Lens" icon="dot circle" iconPosition="left" onChange={this.handleInputChange} />
                    </Form.Group>


                    <Divider hidden />
                    <Divider horizontal>{`${this.state.QP} Details`}</Divider>
                        <Form.Field control={Input} label="Title" name="title" placeholder="Title" id="title-field" onChange={this.handleInputChange} />
                            <Form.Group inline>
                                <label>Submission Type:</label>
                                <Form.Field control={Radio} label='Question' value='Question' checked={this.state.QP === 'Question'} onChange={this.handleQPChange} />
                                <Form.Field control={Radio} label='Post' value='Post' checked={this.state.QP === 'Post'} onChange={this.handleQPChange} />
                            </Form.Group>
                        
                            <Form.Field control={TextArea} label="Description" name="body" id="description-field" onChange={this.handleInputChange} />
                        
                        <Divider hidden />

                        <Form.Field control={Dropdown} label="Tags" name="tags" placeholder='Tags' id="tags-drop" fluid multiple search selection options={tagOptions} onChange={this.handleTagsChange} />

                        <Divider hidden />
                    <Button type="submit" floated="right" onClick={this.handleSubmit}>Submit Post</Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
  }
}
