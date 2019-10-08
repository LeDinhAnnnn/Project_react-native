import React, { Component } from 'react';
import {Alert} from 'react-native';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem,Form,Item,Label,Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class UpPost extends Component {
  constructor(props) {

    super(props)

    this.state = {

      InputName: '',
      InputCont: '',

    }

  }
  InsertDataToServer = () =>{


  const { InputName }  = this.state;
 const { InputCont }  = this.state ;



fetch('http://192.168.1.166/test_json/insert_post.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    name: InputName,

    content: InputUser,

  })

}).then((response) => response.json())
      .then((responseJson) => {

// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });


  }
  render(){
    return(
      <Container>
        <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>Nội dung: </Label>
            <Input autoCapitalize = "words"  onChangeText={InputCont => this.setState({InputCont})} />
          </Item>
        </Form>
        <Button full info style = {{alignSelf: 'center', margin: 30,  }}
          onPress={this.InsertDataToServer}
          >
          <Text>Đăng bài</Text>
        </Button>
        </Content>
      </Container>
    );
  }


}
