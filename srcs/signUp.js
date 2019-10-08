import React, { Component } from 'react';
import {Alert} from 'react-native';
import {Container, Content, Text, Card, Header, Body, Button, Title, CardItem,Form,Item,Label,Input } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class SignUp extends Component {
  constructor(props) {

    super(props)

    this.state = {

      InputName: '',
      InputUser: '',
      InputPass: '',
      InputAdr: '',
      InputPhone: '',
      checkName:'',
      checkUser:'',
      checkPass:'',

    }

  }
  InsertDataToServer = () =>{


 const { InputName }  = this.state ;
 const { InputUser }  = this.state ;
 const { InputPass }  = this.state ;
 const { InputAdr }  = this.state ;
 const { InputPhone }  = this.state ;



fetch('http://192.168.1.166/test_json/insertUser.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    name: InputName,

    user: InputUser,

    pass: InputPass,

    address: InputAdr,

    phone: InputPhone,

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
            <Label>Họ & tên</Label>
            <Input autoCapitalize = "words"  onChangeText={InputName => this.setState({InputName})} />
          </Item>
          <Item floatingLabel>
            <Label>Tên đăng nhập</Label>
            <Input autoCapitalize = "none" onChangeText={InputUser=> this.setState({InputUser})} />
          </Item>
          <Item floatingLabel>
            <Label>Mật khẩu</Label>
            <Input autoCapitalize = "none" autoCompleteType ='password' onChangeText={InputPass => this.setState({InputPass})} />
          </Item>
          <Item floatingLabel>
            <Label>Địa chỉ</Label>
            <Input  onChangeText={InputAdr=> this.setState({InputAdr})} />
          </Item>
          <Item floatingLabel last>
            <Label>Số điện thoại</Label>
            <Input keyboardType="numeric" onChangeText={InputPhone=> this.setState({InputPhone})} />
          </Item>
        </Form>
        <Button full info style = {{alignSelf: 'center', margin: 30,  }}
          onPress={this.InsertDataToServer}
          >
          <Text>Đăng Ký</Text>
        </Button>
        </Content>
      </Container>
    );
  }


}
