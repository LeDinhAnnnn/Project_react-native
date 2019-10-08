import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class pageTwo extends Component {

  render(){
    return(
      <Container>

        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontWeight: 'bold',fontSize: 20}}> {this.props.position.user_post}
                </Text>
                <Text style={{marginTop: 30}}> {this.props.position.content}
                </Text>
              </Body>
            </CardItem>
            </Card>
        </Content>
      </Container>
    );
  }
}
