import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image,TouchableHighlight   } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container,Header,Title, Content, List, ListItem, Left,Card,CardItem, Body, Right, Thumbnail,Button} from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class MainScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      isLoading: true,
      chitiet: this.props.infoUser
    }
  }

  componentDidMount(){
    return fetch('http://192.168.1.166/test_json/list_post.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.post,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }




  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return(
      <Container style={{backgroundColor: "#a0efd6"}}>
      <Header noLeft style={{backgroundColor: '#55E6C1'}} >
         <Body>
           <Title style={{fontWeight: 'bold',fontFamily:"sans-serif-medium"}}>BLOG+</Title>
         </Body>
         <Right>
             <Text style={{color: 'white', fontSize:18, fontWeight: 'bold'}}
             onPress= {()=>{Actions.infoUser({chitiet_user: this.state.chitiet})}}>
             {this.props.infoUser.ten}
             </Text>
         </Right>
       </Header>
      <View style={{flex: 1, paddingTop:10}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item,index}) =>
          <Content>
          <Card>
              <CardItem style={{padding: 10}}>
                <Left>
                  <Thumbnail source={require('../img/avt1.jpg')} />
                  <Body>
                    <Text style={{fontWeight: 'bold',fontSize: 20}}>{item.user_post}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
              <Text style={{padding:15}}  numberOfLines={4} ellipsizeMode="tail">{item.content}</Text>

              </CardItem>
              <CardItem>
                <Left>

                    <Icon name="heart" />
                    <Text>Thích</Text>

                </Left>
                <Body>
                  <Button transparent>
                    <Icon name="star" />
                    <Text style={{marginLeft: -3}}>Bình luận</Text>
                  </Button>
                </Body>
                <Right>
                    <TouchableHighlight onPress={()=>{Actions.pageTwo({position: this.state.dataSource[index]})}}>
                      <Text> Xem </Text>
                    </TouchableHighlight>
                </Right>
              </CardItem>
            </Card>
          </Content>


        }
          keyExtractor={(item, index) => {return item.id;}}
        />
      </View>


      </Container>
    );
  }
}
