import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import history from '../../history.js'
import axios from "axios";
import { Menu, Input, Image } from 'semantic-ui-react';
import SignInModal from "../SignInModal";


const styles = {
  navColor: {
    background: "#2d2b2d"
  },
  zeromp: {
    margin: 0,
    padding: 0
  },
  letterSpace: {
    letterSpacing: '6px',
    fontWeight: 'bold'
  }
};

export default class Nav extends Component {
  state = {
    activeItem: "home", 
    sessionUser: JSON.parse(sessionStorage.getItem('user')),
    logoutRedirect: false
  };
  
  componentDidMount = () => {
    console.log(this.state.sessionUser);
  }

  handleSessionChange = () => {
    this.setState({sessionUser: JSON.parse(sessionStorage.getItem('user'))});
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = () => {
    axios.delete("/api/auth", null);
    sessionStorage.removeItem('user');
    this.handleSessionChange();
    history.push("/logout");
  }

  render() {
    const { activeItem } = this.state;

    return <div>
        <Menu attached="top" stackable inverted style={styles.navColor}>
          <div>
            <Image src={"/img/branding.png"} size="tiny" />
          </div>
          <h1 style={Object.assign({}, styles.letterSpace, styles.zeromp)}><Menu.Item name="CULTURE STACK"/></h1>
          <Menu.Item as={Link} to="/" name="home" active={activeItem === "home"} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to="/browse" name="browse posts" active={activeItem === "browse posts"} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to ="/create" name="submit a post" active={activeItem === "submit a post"} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
          
          {this.state.sessionUser ? (
          
          <Menu.Item name={this.state.sessionUser.username} active={activeItem === ""} onClick={this.handleItemClick} />
          
          ) : (
          <SignInModal callbackSessionChange={this.handleSessionChange} />
          )}
          { this.state.sessionUser && 
            <Menu.Item name="Logout" active={activeItem === "Logout"} onClick={this.handleLogout} />
          }
          </Menu.Menu>
        </Menu>
      </div>;
  }
}
