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

import SearchResults from './SearchResults';

class Search extends Component {
    constructor (props){
        super(props);
        this.state = {};
        this.onSearchPressed = this.onSearchPressed.bind(this);
    }
    
    onSearchPressed (){
        console.log('Searching for: ' + this.state.search);
        this.props.navigator.push({
            component: SearchResults,
            title: 'Results',
            passProps: {
                searchQuery: this.state.search
            }
        });
    }
    
    render (){    
        return (
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text) => this.setState({search: text})}
                    style={styles.input} 
                    placeholder="Search" 
                />
                <TouchableHighlight
                    onPress={this.onSearchPressed}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Search</Text>
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
    },
    loader: {
        marginTop: 24
    },
    error: {
        paddingTop: 10,
        color: 'red'
    }
});

module.exports = Search;
