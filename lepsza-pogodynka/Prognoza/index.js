import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Prognoza extends Component {
    render() {
        return (
            <View style={styles.kontener}>
                <Text style={styles.duzyTekst}>
                    {this.props.glowny}
                </Text>
                <Text style={styles.glownyTekst}>
                    Bieżące warunki: {this.props.opis}
                </Text>
                <Text style={styles.duzyTekst}>
                    {this.props.temp} ℃
                </Text>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    kontener: {height: 130},
    duzyTekst: {
        flex: 2,
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    glownyTekst: {
        flex: 1,
        fontSize: 16,
        textAlign: "center",
        color: "#FFFFFF"
    }
});
