import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../Button";
import NormalnyTekst from "../NormalnyText";
import colors from "../../style/kolory";

export default class Talia extends Component {
    static displayName = "Talia";

    powtorka = () => {
        console.warn("Nie zaimplementowano");
    };

    dodajKarte = () => {
        console.warn("Nie zaimplementowano");
    };

    render() {
        return (
            <View style={styles.grupaTalii}>
                <Button style={styles.przyciskTalii} naNacisniecie={this.powtorka}>
                    <NormalnyTekst>
                        {this.props.talia.nazwa}: {this.props.ilosc} kart
                    </NormalnyTekst>
                </Button>

                <Button style={styles.PrzyciskEdycji} naNacisniecie={this.dodajKarte}>
                    <NormalnyTekst>+</NormalnyTekst>
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    grupaTalii: {
        flexDirection: "row",
        alignItems: "stretch",
        padding: 10,
        marginBottom: 5
    },
    przyciskTalii: { backgroundColor: colors.pink, padding: 10, margin: 0, flex: 1 },
    PrzyciskEdycji: {
        width: 60,
        backgroundColor: colors.pink2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 0,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 0,
        flex: 0
    }
});
