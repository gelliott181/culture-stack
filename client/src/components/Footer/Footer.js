import React, { Component } from "react";
import { Menu, Divider, Container, Segment, Sticky } from 'semantic-ui-react';


export default class Footer extends Component {
    render () {
    
   return <Sticky className={"sticky-footer"}><Segment inverted>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. 
        </Segment></Sticky>


    }
}

