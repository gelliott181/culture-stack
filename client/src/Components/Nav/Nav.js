import React, { Component } from "react";
import { Menu, Input, Image } from 'semantic-ui-react';

const styles = {
  navColor: {
    background: "#2d2b2d"
  },
  zeromp: {
    margin: 0,
    padding: 0
  },
  letterSpace: {
    letterSpacing: '12px'
  }
};

export default class MenuExamplePointing extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return <div>
        <Menu attached="top" inverted style={styles.navColor}>
          <div>
            <Image src={"/img/branding.png"} size="tiny" className="ui" />
          </div>
          <h1 style={{...styles.zeromp, ...styles.letterSpace}}><Menu.Item name="CULTURE STACK" active={activeItem === "culture stack"} onClick={this.handleItemClick} /></h1>
          <Menu.Item name="submit a post" active={activeItem === "submit a post"} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>;
  }
}
