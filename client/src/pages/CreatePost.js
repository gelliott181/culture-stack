import React, { Component } from 'react';
import history from "../history";
import { Grid, Divider, Header, Image, Form, Input, Radio, Dropdown, TextArea, Button } from 'semantic-ui-react';

import { tagOptions } from '../common';
import API from "../utils/API";


export default class CreatePost extends Component {
    
    state = {
        img_file: null,
        img_preview: '',
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

    componentWillMount = () => {
        this.setState({
            sessionUser: JSON.parse(sessionStorage.getItem('user')),
            img_preview: "./img/default_placeholder.png"
        });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFileChange = event => {
        
        let reader = new FileReader();
        let img_file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                img_file: img_file,
                img_preview: reader.result
            });
        }

        reader.readAsDataURL(img_file);

    };

    handleQPChange = (event, { name }) => {
        this.setState({ QP: name })
    };

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
            formData.append("author", this.state.sessionUser.id);
            
            API.uploadImage(formData)
            .then(res => {
                this.setState({
                    img_file: null,
                    aperture: "",
                    iso: "",
                    speed: "",
                    camera: "",
                    lens: "",
                    title: "",
                    QP: "",
                    body: "",
                    tags: [],
                    sessionUser: null
                });
                history.push(`/posts/${res.data._id}`);
            })
            .catch(err => console.log(err));
        }
    }

  render() {

    // Preview style settings
    const wrapStyle = {
      backgroundColor: "#2D2B2D",
      display: "block",
      width: "100%",
      position: "relative",
      height: "68%",
      padding: "56.25% 0 0 0",
      overflow: "hidden"
    }

    const imgStyle = {
      position: "absolute",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      margin: "auto"
    }

    return (
        <Grid container stackable doubling columns={2} divided="vertically">

            <Grid.Column>
                <Divider hidden />
                <Divider horizontal>
                    <Header as="h1">SUBMIT A PHOTO</Header>
                </Divider>
                    <div style={wrapStyle}>
                        <Image style={imgStyle} src={this.state.img_preview} />
                    </div>
                <Form>
                    <Form.Field>
                        <Input icon="camera" iconPosition="left" name="img_file" type="file" onChange={this.handleFileChange} />
                    </Form.Field>
                </Form>
            </Grid.Column>
            
            <Grid.Column>
                <Form>
                    <Divider hidden />
                      <Divider horizontal>
                       <Button.Group>
                                <Button color="gray" name="Question" onClick={this.handleQPChange}>Question</Button>
                                <Button.Or />
                                <Button color="pink" name="Post" onClick={this.handleQPChange}>Post</Button>
                        </Button.Group>
                        </Divider>
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
