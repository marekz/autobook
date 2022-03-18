import React, {Component} from "react";
import { ImageBackground, CameraRoll } from "react-native";

export default class FotoBackground extends Component {
    constructor(props) {
        super(props);
        this.state = { zrodloZdjecia: null };
    }

    componentDidMount() {
        CameraRoll.getPhotos({ first: 1 }).then(data => {
            this.setState({
                zrodloZdjecia: { uri: data.edges[0].node.image.uri }
            });
        }, error => {
            console.warn(error);
        });
    }

    render() {
        return (
            <ImageBackground
                style={styles.tlo}
                source={this.state.zrodloZdjecia}
                resizeMode="cover"
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}