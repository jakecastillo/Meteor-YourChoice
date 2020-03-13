import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted position="right"><Icon positon="right" name="facebook f"/></Menu.Item>
            <Menu.Item fitted><Icon name="instagram"/></Menu.Item>
            <Dropdown item text="USD" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>CAD</Dropdown.Item>
                <Dropdown.Item>JPY</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item><hr/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}