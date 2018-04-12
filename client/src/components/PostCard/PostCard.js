import React, { Component } from "react";
import { Card, Image } from 'semantic-ui-react';
import {Link} from "react-router-dom";


export default class PostCard extends Component {
  
  render(props) {

    const imageStyle = {
      backgroundImage: "url("+this.props.img_url+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "240px"
    }

    // const wrapStyle = {
    //   backgroundColor: "black",
    //   display: "block",
    //   width: "100%",
    //   position: "relative",
    //   height: "0",
    //   padding: "56.25% 0 0 0",
    //   overflow: "hidden"
    // }

    // const imgStyle = {
    //   position: "absolute",
    //   display: "block",
    //   maxWidth: "100%",
    //   maxHeight: "100%",
    //   left: "0",
    //   right: "0",
    //   top: "0",
    //   bottom: "0",
    //   margin: "auto"
    // }

    return(
      <Card fluid>
        <Card.Content>
          <Image floated="left" size="mini" src={this.props.userAvatar} circular />
          <Card.Header as={Link} to={this.props.post_url}>{this.props.name}</Card.Header>

          {/* When ready, this should link to {`/user/${this.props.author._id}`} */}
          <Card.Meta as={Link} to={this.props.author_url}>{this.props.author}</Card.Meta>
        </Card.Content>
        {/* <div style={ wrapStyle }>
          <img style={imgStyle} src={this.props.postImage} />
        </div> */}

        <Link to={this.props.post_url}><div style={ imageStyle }></div></Link>
        <Card.Content>
        </Card.Content>
      </Card>
    )
  };
}