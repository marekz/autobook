import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Prognoza from "./Prognoza";
import PrzyciskLokalizacji from "./PrzyciskLokalizacji";
import styleTekstu from "./styles/typografia";

const KLUCZ_MAGAZYNY = "@LepszaPogodynka:kod";

import MapaPogody from "./MapaPogody";

import FotoBackground from "./FotoBackground/lokalny_obraz";
import FotoTlo from "./FotoBackground/lokalny_obraz";
// import FotoBackground from "./FotoBackground";

export default class ProjektPogodynka extends Component {
    constructor(props) {
        super(props);
        this.state = { prognoza: null };
    };

    componentDidMount() {
        AsyncStorage
            .getItem(KLUCZ_MAGAZYNY)
            .then(wartosc => {
                if (wartosc !== null) {
                    this._pobierzPrognozeDlaKodu(wartosc);
                }
            })
            .catch(error => console.error("Błąd AsyncStorage: " + error.message ))
            .done();
    }

    _pobierzPrognozeDlaKodu = kod => {
        //Zapiszkod pocztowy
        AsyncStorage
            .setItem(KLUCZ_MAGAZYNY, kod)
            .then(() => console.log("Zapisano na dysku: " + kod))
            .catch(error => console.log("Błąd AsyncStorage: " + error.message))
            .done();

        MapaPogody.pobierzPrognozeKod(kod).then(prognoza => {
            this.setState({ prognoza: prognoza });
        });
    };

    _pobierzPrognozeDlaWspolrzednych = (lat, lon) => {
        MapaPogody.pobierzPrognozeWspolrzedne(lat, lon).then(prognoza => {
            this.setState({ prognoza: prognoza });
        });
    };

    _zmianaTekstu = event => {
        let kod = event.nativeEvent.text;
        this._pobierzPrognozeDlaKodu(kod);
    };

    // _handleTextChange = event => {
    //     let kod = event.nativeEvent.text;
    //     MapaPogody.pobierzPrognozeKod(kod).then(prognoza => {
    //         this.setState({ prognoza: prognoza });
    //     });
    //     this.setState({ kod: event.nativeEvent.text });
    // };

    render() {
        let tresc = null;
        if (this.state.prognoza !== null) {
            tresc = (
                <View style={styles.wiersz}>
                    <Prognoza
                        opis = { this.state.prognoza.opis }
                        temp = { this.state.prognoza.temp }
                    />
                </View>
            );
        }

        return (
            <FotoTlo>
                <View style={styles.nakladka}>
                    <View style={styles.wiersz}>
                        <Text style={styles.glownyTekst}>
                            Bieżąca pogoda dla:
                        </Text>

                        <View style={styles.kontenerKodu}>
                            <TextInput
                                style={[ styles.glownyTekst, styles.kodPocztowy ]}
                                onSubmitEditing={this._zmianaTekstu}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View style={styles.wiersz}>
                        <PrzyciskLokalizacji
                            onGetCoords={this._pobierzPrognozeDlaWspolrzednych}
                        />
                    </View>
                    {tresc}
                </View>
            </FotoTlo>
        );
    }
}

const baseFontSize=16;

const styles = StyleSheet.create({
    nakladka: {backgroundColor: "rgba(0,0,0,0.1)"},
    wiersz: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 24
    },
    kontenerKodu: {
        borderBottomColor: "#DDDDDD",
        borderBottomWidth: 1,
        marginLeft: 5,
        marginTop: 3,
        width: 80,
        height: styleTekstu.podstawowyRozmiarCzcionki * 2,
        justifyContent: "flex-end"
    },
    kodPocztowy: {flex: 1}
});