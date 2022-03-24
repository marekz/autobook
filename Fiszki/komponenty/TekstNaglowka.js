import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { czcionka, wspolczynnikSkalowania} from "../style/czcionka";
let { width } = Dimensions.get("window");

class TekstNaglowka extends Component {
    static displayName = "TekstNaglowka";

    render() {
        return (
            <Text>
                {this.props.children}
            </Text>
        );
    }
}

const scaled = StyleSheet.create({
    duzy: {
        fontSize: width / wspolczynnikSkalowania.duzy
    }
});

export default TekstNaglowka;