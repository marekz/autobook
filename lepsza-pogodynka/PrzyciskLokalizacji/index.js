import React, { Component }  from "react";
import Button from "./../Button";
import styles from "./style";
import Geolocation from 'react-native-geolocation-service';

export default class PrzyciskLokalizacji extends Component {
    _nacisniecie() {
        Geolocation.getCurrentPosition(
            pozycjaPoczatkowa => {
                this.props.onGetCoords(
                    pozycjaPoczatkowa.coords.latitude,
                    pozycjaPoczatkowa.coords.longitude
                );
            },
            error => {
                alert(error.message);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
    }

    render() {
        return (
            <Button
                label="Pobierz bieżącą lokalizację"
                style={styles.przyciskLokalizacji}
                onPress={this._nacisniecie.bind(this)}
            />
        );
    }
}