import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainScreen from './srcs/screen1';
import PageTwo from './srcs/screen2';
import Login from './srcs/login';
import SignUp from './srcs/signUp';
import InfoUser from './srcs/infoUser';
import UpPost from './srcs/infoUser';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Login" component={Login} title="Đăng nhập" initial={true}/>
          <Scene key="MainScreen" component={MainScreen}   title="Trang chủ" hideNavBar={1}/>
          <Scene key="pageTwo" component={PageTwo} title="Bài viết" />
          <Scene key="SignUp" component={SignUp} title="Đăng Ký" />
          <Scene key="infoUser" component={InfoUser} title="Thông tin tài khoản" />
          <Scene key="UpPost" component={UpPost} title="Đăng bài viết" />

        </Scene>
      </Router>
    )
  }
}
