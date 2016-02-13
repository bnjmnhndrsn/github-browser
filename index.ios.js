/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ActivityIndicatorIOS
} from 'react-native';

import Login from './Login.js';
import AuthService from './AuthService.js';


class GithubBrowser extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      checkingAuth: true
    };
    this.onLogin = this.onLogin.bind(this);
  }
  componentDidMount (){
    AuthService.getAuthInfo((err, authInfo)=>{
      console.log(authInfo);
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      });
    });
  }
  onLogin(){
      this.setState({isLoggedIn: true});
  }
  
  render() {
    if (this.state.checkingAuth) {
        return (
          <View style={styles.container}>
            <ActivityIndicatorIOS 
              animating={true}
              size="large"
              style={styles.loader}
            />
          </View>
        )
    }
    
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Logged In</Text>
        </View>
      )
    }
    return (
      <Login onLogin={this.onLogin}/>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        padding: 10
    },
    welcome: {
        fontSize: 32
    }
});

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
