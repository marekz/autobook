import React, {Component} from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default class ProstaLista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dane: [
                { key: "a" },
                { key: "b" },
                { key: "c" },
                { key: "d" },
                { key: "e" },
                { key: "f" },
                { key: "g" },
                { key: "Dłuższy przykład" },
                { key: "h" },
                { key: "i" },
                { key: "j" },
                { key: "k" },
                { key: "l" },
                { key: "m" },
                { key: "n" },
                { key: "o" },
                { key: "p" }
            ]
        };
    }

    _renderujElement = dane => {
        return <Text style={styles.wiersz}>{dane.item.key}</Text>;
    };

    render() {
        return (
            <View style={styles.kontener}>
                <FlatList data={this.state.dane}
                          renderItem={this._renderujElement} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    kontener: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    wiersz: {
        fontSize: 24,
        padding: 42,
        borderWidth: 1,
        borderColor: "#DDDDDD"
    }
});