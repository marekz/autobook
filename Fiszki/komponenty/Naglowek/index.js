import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from './style';
import TekstNaglowka from "../TekstNaglowka";

class Naglowek extends Component {
    static displayName = "Naglowek";

    render () {
        return (
            <View style={styles.naglowek}>
                <Image source={require("../../icon.png") } style={styles.logo} />
                <TekstNaglowka>Fiszki</TekstNaglowka>
            </View>
        );
    }
}

export default Naglowek;