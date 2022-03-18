import { Component } from "react";
import {ImageBackground} from "react-native";
import styles from "./style.js"

class FotoTlo extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.tlo}
                source={require("./flowers.png")}
                resizeMode="cover"
                >
                {this.props.children}
            </ImageBackground>
        );
    }
}

export default FotoTlo;