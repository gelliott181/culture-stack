import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react"

const Nav = () => (
  <nav className="nav-color">
    <div className="ui stackable inverted pointing menu">
      <div className="image">
        <img
          className="ui tiny image"
          src={process.env.PUBLIC_URL + "/img/branding.png"} alt="logo"
        />
      </div>
      <h1 className="ui header item nav-h1-letter-spacing">
        CULTURE STACK
      </h1>
      <a className="item">submit a post</a>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon" />
          </div>
        </div>
        <div className="item">
          <a href="#" className="item">
            Sign In
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing>
          <img className="ui tiny image" src={process.env.PUBLIC_URL + "/img/branding.png"} alt="logo"/>
          <Menu.Item
            name="submit a post"
            active={activeItem === "submit a post"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
