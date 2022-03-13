import {StatusBar} from "expo-status-bar";
import React, {Component} from "react";
import {StyleSheet, Text, View, TextInput, ImageBackground} from "react-native";
import Prognoza from "./Prognoza";
import MapaPogody from "./MapaPogody";

export default class ProjektPogodynka extends Component {

    constructor(props) {
        super(props);
        this.state = { kod: "", prognoza: null };
    };

    _handleTextChange = event => {
        let kod = event.nativeEvent.text;
        MapaPogody.pobierzPrognoze(kod).then(prognoza => {
            console.log(prognoza);
            this.setState({ prognoza: prognoza });
        })
        this.setState({ kod: event.nativeEvent.text });
    }

    render() {
        let tresc = null;
        if (this.state.prognoza !== null) {
            tresc = (
                <Prognoza
                    glowne={this.state.prognoza.glowne}
                    opis={this.state.prognoza.opis}
                    temp={this.state.prognoza.temp}
                />
            );
        }
        return (
            <View style={styles.kontener}>
                <ImageBackground
                    source={require('./img/kwiaty.png')}
                    resizeMode='cover'
                    style={styles.tlo}>
                    <View style={styles.nakładka}>
                        <View style={styles.wiersz}>

                            <Text style={styles.glownyTekst}>
                                Bieżąc pogoda dla:
                            </Text>

                            <View style={styles.kontenerKodu}>
                                <TextInput
                                    style={[styles.kodPocztowy, styles.glownyTekst]}
                                    onSubmitEditing={this._handleTextChange}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                        {tresc}
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
    kontener: {
        flex: 1
    },
    tlo: {
        flex: 1,
        flexDirection: "column"
    },
    nakladka: {
        paddingTop: 5,
        backgroundColor: "#000000",
        opacity: 0.5,
        flexDirection: "column",
        alignItems: "center"
    },
    wiersz: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "flex-start",
        padding: 30
    },
    kontenerKodu: {
        height: (baseFontSize + 25),
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: -6
    },
    kodPocztowy: {
        flex: 1,
        flexBasis: 1,
        width: 60
    },
    glownyTekst: {
        fontSize: baseFontSize,
        color: "#ffffff"
    }
});