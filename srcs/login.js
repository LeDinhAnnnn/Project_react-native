import React, { Component } from 'react';
import {TouchableHighlight } from 'react-native';
import { Container,Footer, Header, Content, Form, Item, Input, Label, Button,Text,Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      user: '',
      pass:'',
      showToast: false,
    }
  }

  componentDidMount(){
    return fetch('http://192.168.1.166/test_json/userlist.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataUser: responseJson.user,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    return (
      <Container>
        <Content>
          <Form>
          <Item></Item>
            <Item floatingLabel>
              <Label>Tên đăng nhâp</Label>
              <Input autoCapitalize = "none" value={this.state.user} onChangeText={(text) => this.setState({user:text})} />
            </Item>
            <Item floatingLabel last>
              <Label>Mật khẩu</Label>
              <Input autoCapitalize = "none" secureTextEntry = {true} value={this.state.pass} onChangeText={(text) => this.setState({pass:text})} />
            </Item>
          </Form>
          <Button full info style = {{alignSelf: 'center', margin: 30,  }}
            onPress={()=>{this.onPressNext()}}
            >
            <Text>Đăng nhập</Text>
          </Button>

        </Content>
        <Footer style={{backgroundColor:'white'}}>
        <TouchableHighlight onPress={()=>{Actions.SignUp()}}>
          <Text>Ấn vào đây để đăng ký tài khoản?</Text>
        </TouchableHighlight>
        </Footer>
      </Container>
    );
  }

  onPressNext(){
    var arr = this.state.dataUser;
    if(this.state.user.trim(" ") == '' ||this.state.pass.trim(" ")== ''){
      return alert ('Bạn phải nhập đủ thông tin')
    }
    else{
    for(var item = 0; item< arr.length; item++){
      if(arr[item].tk == this.state.user && arr[item].mk == this.state.pass){
          return Actions.MainScreen({infoUser: this.state.dataUser[item]});
        }

      }
          return alert("Sai tài khoản mật khẩu")
    }

   }

}
