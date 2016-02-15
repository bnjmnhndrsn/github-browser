'use strict';

import React, {
    Component,
    Text,
    View,
    StyleSheet,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

import Feed from './Feed.js';
import Search from './Search.js';

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
                <NavigatorIOS
                    style={{
                        flex: 1
                    }}
                    initialRoute={{
                        component: Feed,
                        title: 'Feed'
                    }}
                />
              </TabBarIOS.Item>
              <TabBarIOS.Item 
                style={styles.container}
                title="Search"
                selected={this.state.selectedTab == 'search'}
                onPress={()=> this.setState({selectedTab: 'search'})}
              >
                  <NavigatorIOS
                      style={{
                          flex: 1
                      }}
                      initialRoute={{
                          component: Search,
                          title: 'Search'
                      }}
                  />
              </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
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
