import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {resetAction} from "../App";
import FullImage from 'react-native-fullwidth-image';

class HasilScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ff0000'
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            hasil: this.props.navigation.state.params.hasil
            //hasil: 'menang'
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: 100
            }}>
                {
                    this.state.hasil == 'menang' ? (
                        <FullImage
                            source={require('../img/tebakgambar/win.png')}
                            ratio={1}
                        />
                    ) : (
                        <FullImage
                            source={require('../img/tebakgambar/lose.png')}
                            ratio={1}
                        />
                    )
                }

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.dispatch(resetAction)
                    }}
                    style={{
                        backgroundColor: '#ff0000',
                        padding: 10,
                        marginTop: 50
                    }}
                >
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'white',
                        fontSize: 15
                    }}>MENU</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HasilScreen;
