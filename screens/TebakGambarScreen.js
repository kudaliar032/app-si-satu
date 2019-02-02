import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import Nyawa from 'react-native-star-rating';
import {SCLAlert, SCLAlertButton} from 'react-native-scl-alert';

const soal = [
    {
        jawaban: 'BINTANG EMAS',
        uri: require('../img/tebakgambar/bintang_emas.png')
    },
    {
        jawaban: 'SALING HORMAT',
        uri: require('../img/tebakgambar/saling_hormat.png')
    },
    {
        jawaban: 'SILA PERTAMA',
        uri: require('../img/tebakgambar/sila_pertama.png')
    },
    {
        jawaban: 'ENAM AGAMA',
        uri: require('../img/tebakgambar/enam_agama.png')
    },
    {
        jawaban: 'MEMELUK AGAMA',
        uri: require('../img/tebakgambar/memeluk_agama.png')
    }
];

class TebakGambarScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jawabanBenar: false,
            jawabanSalah: false,
            jawaban: '',
            soalKe: 0,
            nyawa: 3
        };

        this.handleClose = this.handleClose.bind(this);
        this.cekJawaban = this.cekJawaban.bind(this);
        this.soalBerikutnya = this.soalBerikutnya.bind(this);
        this.tebakGambarSelesai = this.tebakGambarSelesai.bind(this);
    }

    handleClose() {
        this.setState({
            jawabanBenar: false,
            jawabanSalah: false
        });
    }

    cekJawaban() {
        if (this.state.jawaban.toUpperCase() == soal[this.state.soalKe].jawaban) {
            this.jawabanBenar();
        } else {
            this.jawabanSalah();
        }
    }

    jawabanBenar() {
        if (this.state.soalKe + 1 >= soal.length) {
            this.props.navigation.navigate({
                routeName: 'Hasil',
                params: {
                    hasil: 'menang'
                }
            });
            this.tebakGambarSelesai();
        } else {
            this.setState({
                jawabanBenar: true,
                jawaban: ''
            });
        }
    }

    jawabanSalah() {
        if (this.state.nyawa - 1 == 0) {
            this.props.navigation.navigate({
                routeName: 'Hasil',
                params: {
                    hasil: 'kalah'
                }
            });
            this.tebakGambarSelesai();
        } else {
            this.setState({
                nyawa: this.state.nyawa-1,
                jawabanSalah: true,
                jawaban: ''
            });
        }
    }

    tebakGambarSelesai() {
        this.setState({
            jawabanBenar: false,
            jawabanSalah: false,
            jawaban: '',
            soalKe: 0,
            nyawa: 3
        });
    }

    soalBerikutnya() {
        this.setState({
            soalKe: this.state.soalKe+1,
        });
        this.handleClose();
    }

    render() {
        return (
            <View style={styles.container}>
                <SCLAlert
                    theme="success"
                    show={this.state.jawabanBenar}
                    title="HOREEE..."
                    subtitle="JAWABAN ANDA BETUL"
                    onRequestClose={() => {}}
                >
                    <SCLAlertButton theme="success" onPress={this.soalBerikutnya}>BERIKUTNYA</SCLAlertButton>
                </SCLAlert>

                <SCLAlert
                    theme="danger"
                    show={this.state.jawabanSalah}
                    title="YAAHHH..."
                    subtitle="JAWABAN ANDA SALAH"
                    onRequestClose={() => {}}
                >
                    <SCLAlertButton theme="danger" onPress={this.handleClose}>CANCEL</SCLAlertButton>
                </SCLAlert>

                <ScrollView>
                    <View style={{
                        flexGrow: 1
                    }}>
                        <View style={{
                            marginBottom: 10
                        }}>
                            <Nyawa
                                fullStar={'heart'}
                                fullStarColor={'red'}
                                emptyStar={'heart'}
                                disabled={true}
                                maxStars={3}
                                rating={this.state.nyawa}
                                containerStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                buttonStyle={{
                                    marginHorizontal: 3
                                }}
                                starSize={30}
                            />
                        </View>

                        <FullWidthImage
                            source={soal[this.state.soalKe].uri}
                            ratio={1}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20
                    }}>
                        <TextInput
                            value={this.state.jawaban}
                            onChangeText={jawaban => this.setState({jawaban})}
                            style={{
                                flexGrow: 1,
                                borderWidth: 1,
                                borderColor: 'red',
                                paddingHorizontal: 10
                            }}
                            placeholder="Masukan jawaban"
                            onSubmitEditing={() => {
                                this.cekJawaban();
                            }}
                            returnKeyType="done"
                        />
                        <TouchableOpacity
                            onPress={() => {
                               this.cekJawaban();
                            }}
                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingHorizontal: 10
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontWeight: 'bold'
                            }}>JAWAB</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonNextBackDone: {
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        padding: 5,
        paddingHorizontal: 15
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    soalStyle: {
        fontSize: 18,
        marginBottom: 20,
        color: 'black'
    }
});

export default TebakGambarScreen;
