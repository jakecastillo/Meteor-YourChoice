import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Icon, Dropdown, Image, Grid, List, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid left>
              <Grid columns={3} divided>
                <Grid.Column>
                  <Menu.Item>Search</Menu.Item>
                  <Menu.Item>F.A.Q</Menu.Item>
                  <Menu.Item>Contact</Menu.Item>
                  <Image src="https://cdn.shopify.com/s/files/1/0738/5885/files/boxcatmail_x100@2x.png?v=1557187666"/>
                </Grid.Column>

                <Grid.Column>
                  <Menu.Item>NEWSLETTER SIGN UP</Menu.Item>
                  <form>
                    <label>
                      Name:
                      <input type="text" email="email" />
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
                  <Icon name="black button">Join</Icon>
                </Grid.Column>
              </Grid>
            </Grid>
          </Container>
        </div>
    )
  }
}