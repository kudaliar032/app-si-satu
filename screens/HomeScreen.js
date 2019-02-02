import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar
} from 'react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#ff0000'
        }
    };

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <StatusBar
                    backgroundColor="red"
                />
                <ScrollView style={styles.containerScreen}>
                    <View style={{
                        marginVertical: 20,
                        alignItems: 'center'
                    }}>
                        <Image style={{width: 150, height: 150, marginBottom: 20}} source={require('../img/sila/bintang.png')} />
                        <Text style={styles.headerText}>KETUHANAN YANG MAHA ESA</Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate({
                            routeName: 'Informasi',
                            params: {sila: 1, menu: 'pengertian'    }
                        })}}
                    >
                        <View style={styles.containerMenu}>
                            <Image style={{width: 75, height: 75}} source={require('../img/icon/question.png')}/>
                            <View width={10}/>
                            <Text style={styles.textMenu}>PENGERTIAN</Text>
                        </View>
                    </TouchableOpacity>

                    <View height={15}/>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate({
                            routeName: 'Informasi',
                            params: {sila: 1, menu: 'arti'    }
                        })}}
                    >
                        <View style={styles.containerMenu}>
                            <Image style={{width: 75, height: 75}} source={require('../img/icon/artidanmakna.png')}/>
                            <View width={10}/>
                            <Text style={styles.textMenu}>ARTI DAN MAKNA</Text>
                        </View>
                    </TouchableOpacity>

                    <View height={15}/>
                    <TouchableOpacity
                        onPress={() => {this.props.navigation.navigate({
                            routeName: 'Informasi',
                            params: {sila: 1, menu: 'penerapan'    }
                        })}}
                    >
                        <View style={styles.containerMenu}>
                            <Image style={{width: 75, height: 75}} source={require('../img/icon/penerapan.png')}/>
                            <View width={10}/>
                            <Text style={styles.textMenu}>PENERAPAN DALAM KEHIDUPAN</Text>
                        </View>
                    </TouchableOpacity>

                    <View height={15}/>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('TebakGambar')}
                    >
                        <View style={styles.containerMenu}>
                            <Image style={{width: 75, height: 75}} source={require('../img/icon/latihan.png')}/>
                            <View width={10}/>
                            <Text style={styles.textMenu}>TEBAK GAMBAR</Text>
                        </View>
                    </TouchableOpacity>

                    <View height={20}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        padding: 10
    },
    textMenu: {
        fontSize: 15,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        flex: 1
    },
    containerScreen: {
        backgroundColor: 'white',
        flex: 1,
        padding: 20,
        paddingTop: 0
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        flex: 1,
        flexWrap: 'wrap'
    }
});

export default HomeScreen;
