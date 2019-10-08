import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Title, CardItem,Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class InfoUser extends Component {
  constructor(props) {

    super(props)

    this.state = {
      info_user_post: this.props.chitiet_user,

    }

  }
  render(){
    return(
      <Container>

        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Họ và tên:{this.state.info_user_post.ten}
                </Text>
                <Text> Địa chỉ: {this.state.info_user_post.dc}
                </Text>
                <Text> Số điện thoại: {this.state.info_user_post.sdt}
                </Text>
              </Body>
            </CardItem>
            </Card>

            <Button full info style = {{alignSelf: 'center', margin: 30,  }}
              // onPress={()=>{Actions.UpPost({post_user: this.props.chitiet_user})}}
              >
              <Text>Đăng bài</Text>
            </Button>

        </Content>
      </Container>
    );
  }
}
