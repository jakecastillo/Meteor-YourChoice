import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <div class="yourchoice-background">
          <Grid centered>
            <Menu.Item left><Icon name="search"/></Menu.Item>
          <Dropdown item text="Stickers">
            <Dropdown.Menu>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              <Dropdown.Item>Lorem ipsum</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            <Dropdown item text="Apparel">
              <Dropdown.Menu>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
                <Dropdown.Item>Lorem ipsum</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              <Menu.Item>Car</Menu.Item>
            <Image src="//cdn.shopify.com/s/files/1/0738/5885/files/NEBAJAPA2N3_150x.png?v=1557187274"/>
              <Menu.Item>F.A.Q</Menu.Item>
              <Menu.Item>About</Menu.Item>
              <Menu.Item>Photo blog</Menu.Item>
            <Menu.Item left><Icon name="user icon"/></Menu.Item>
            <Menu.Item left><Icon name="shopping bag"/></Menu.Item>
          </Grid>
        </div>
    )
  }
}