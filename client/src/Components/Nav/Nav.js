import React, { Component } from "react";
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
    currentUser: sessionStorage.getItem('user')
  };
  
  componentDidMount = () => {
    console.log(this.state.currentUser);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <div>
        <Menu attached="top" inverted style={styles.navColor}>
          <div>
            <Image src={"/img/branding.png"} size="tiny" />
          </div>
          <h1 style={Object.assign({}, styles.letterSpace, styles.zeromp)}><Menu.Item name="CULTURE STACK"/></h1>
          <Menu.Item name="submit a post" active={activeItem === "submit a post"} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
          <Menu.Item name="sign in" active={activeItem === "sign in"} onClick={this.handleItemClick} />
          {/* <SignInModal
            history = {this.props.history}
          /> */}
          </Menu.Menu>
        </Menu>
      </div>;
  }
}
