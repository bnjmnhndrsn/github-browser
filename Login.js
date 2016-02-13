'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight
} from 'react-native';

class Login extends Component {
    constructor (props){
        super(props);
    }
    
    render (){
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
                    style={styles.input} 
                    placeholder="Username" 
                />
                <TextInput 
                    style={styles.input} 
                    placeholder="Password" 
                    secureTextEntry 
                />
                <TouchableHighlight
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableHighlight>
            </View>
        )
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
    }
})

module.exports = Login;
