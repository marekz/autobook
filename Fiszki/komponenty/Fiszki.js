import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Naglowek from "./Naglowek";

class Fiszki extends Component {
    renderujScene() {
        return "1";
    }

    render() {
        return (
            <View style={styles.kontener}>
                <Naglowek />
                {/*{this.this.renderujScene()}*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({ kontener: { flex: 1, marginTop: 30 } });

export default Fiszki;