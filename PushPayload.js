'use strict';

import React, {
    Component,
    Text,
    View,
    StyleSheet,
    ListView,
    ActivityIndicatorIOS,
    Image,
    TouchableHighlight
} from 'react-native';

import moment from 'moment';

class PushPayload extends Component {
    constructor (props){
        super(props);
        this.state = {
        };
    }
    
    render (){
        console.log(this.props);
        return (
            <View style={{
                flex: 1,
                paddingTop: 80,
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}>
                <Image
                    source={{uri: this.props.event.actor.avatar_url}}
                    style={{
                        height: 120,
                        width: 120,
                        borderRadius: 60
                    }}
                />
                <Text style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    fontSize: 20
                }}>
                    {moment(this.props.event.created_at).fromNow()}
                </Text>
                <Text>{this.props.event.type}</Text>
                <Text>{this.props.event.actor.login}</Text>
            </View>
        );
    }
}


module.exports = PushPayload;
