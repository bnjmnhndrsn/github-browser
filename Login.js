'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ActivityIndicatorIOS
} from 'react-native';

class Login extends Component {
    constructor (props){
        super(props);
        this.onLoginPressed = this.onLoginPressed.bind(this);
        this.state = {
            showProgress: false
        };
    }
    
    render (){
        var errorCtrl = <View />;
        if (this.state.badCredentials) {
            errorCtrl = <Text style={styles.error}>
                Incorrect username or password
            </Text>
        }
        
        if (this.state.unknownError) {
            errorCtrl = <Text style={styles.error}>
                Unknown error
            </Text>
        }
        
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('./imgs/Octocat.png')}
                    resizeMode={Image.resizeMode.contain}
                >
                </Image>
                <Text style={styles.heading}>Github Browser</Text>
                <TextInput
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.input} 
                    placeholder="Username" 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({password: text})}
                    style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry 
                />
                <TouchableHighlight
                    onPress={this.onLoginPressed}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
                {errorCtrl}
                <ActivityIndicatorIOS
                    animating={this.state.showProgress}
                    size="large"
                    style={styles.loader}
                />
            </View>
        )
    }
    
    onLoginPressed(){
        this.setState({
            showProgress: true
        });
        
        var authService = require('./AuthService');
        
        authService.login({
            username: this.state.username,
            password: this.state.password
        }, (results) => {
            this.setState(Object.assign({
                showProgress: false
            }, results));
            
            if (results.success && this.props.onLogin) {
                this.props.onLogin();
            }
        });
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
    logo: {
        width: 66,
        height: 55
    },
    heading: {
        fontSize: 30,
        marginTop: 10
    },
    input: {
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48bbec'
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        marginTop: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 22,
        color: '#FFF',
        alignSelf: 'center'
    },
    loader: {
        marginTop: 24
    },
    error: {
        paddingTop: 10,
        color: 'red'
    }
});

module.exports = Login;
