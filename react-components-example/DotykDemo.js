import { StatusBar } from 'expo-status-bar';
import React, {Component} from "react";
import {StyleSheet, Text, View, TouchableHighlight, PanResponder} from "react-native";

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { pressing: false };
    }

    _onPressIn = () => {
        this.setState({ pressing: true });
    };

    _onPressOut = () => {
        this.setState({ pressing: false });
    };

    render() {
        return (
            <View style={style.kontener}>
                <TouchableHighlight
                        onPressIn = {this._onPressIn}
                        onPressOut = {this._onPressOut}
                        style={style.dotyk}
                >
                    <View style={style.przycisk}>
                        <Text style={style.witaj}>
                            {this.state.pressing ? 'KLIK!' : 'NACIŚNIJ MNIE!'}
                        </Text>
                    </View>
                </TouchableHighlight>
                <StatusBar style="auto" />
            </View>
        );
    };
}

const style = StyleSheet.create({
    kontener: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    witaj: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "#FFFFFF"
    },
    dotyk: {
        borderRadius: 100
    },
    przycisk: {
        backgroundColor: "#FF0000",
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: "center"
    }
});