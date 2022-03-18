import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Prognoza extends Component {
    render() {
        return (
            <View style={styles.prognoza}>
                <Text style={{ color: "#FFFFFF", fontSize: 72 }}>
                    {this.props.temp} ℃
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: 32 }}>
                    {this.props.opis}
                </Text>
            </View>
        );
    }
}

const  styles = StyleSheet.create({
    prognoza: { alignItems: "center" }
});
