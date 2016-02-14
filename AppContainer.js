'use strict';

import React, {
    Component,
    Text,
    View,
    StyleSheet,
    TabBarIOS
} from 'react-native';

class AppContainer extends Component {
    constructor (props){
        super(props);
        this.state = {
            selectedTab: 'feed'
        };
    }
    
    render (){
        return (
            <TabBarIOS>
              <TabBarIOS.Item
                style={styles.container}
                title="Feed"
                selected={this.state.selectedTab == 'feed'}
                onPress={()=> this.setState({selectedTab: 'feed'})}
              >
                <Text style={styles.welcome}>Tab 1</Text>
              </TabBarIOS.Item>
              <TabBarIOS.Item 
                style={styles.container}
                title="Search"
                selected={this.state.selectedTab == 'search'}
                onPress={()=> this.setState({selectedTab: 'search'})}
              >
                <Text style={styles.welcome}>Tab 2</Text>
              </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

module.exports = AppContainer;
