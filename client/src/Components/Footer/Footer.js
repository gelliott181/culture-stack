import React, { Component } from "react";
import { Menu, Divider, Container } from 'semantic-ui-react';


export default class Footer extends Component {
    render () {
    
   return (
     <div>
        <Container>
            <Divider/>
        </Container>
        <div className="ui inverted vertically divided container vertical footer segment" style={{ position: "absolute", width: "100%", bottom: "1" }}>
            <div className="ui center aligned container">
            <div className="ui stackable inverted divided grid">
                <div className="single wide column">
                <h4 className="ui inverted header">Footer Header</h4>
                <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                </p>
                </div>
            </div>
            <div className="ui inverted section divider" />
            <div className="ui horizontal inverted small divided link list">
                <a className="item" href="#">
                Site Map
                </a>
                <a className="item" href="#">
                Contact Us
                </a>
                <a className="item" href="#">
                Terms and Conditions
                </a>
                <a className="item" href="#">
                Privacy Policy
                </a>
            </div>
            </div>
        </div>
    </div>
    )
    }
}

