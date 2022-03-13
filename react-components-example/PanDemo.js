"use strict";

import React, {Component} from "react";
import { StyleSheet, PanResponder, View, Text } from "react-native";

const ROZMIAR_KOLA = 40;
const KOLOR_KOLA = "blue";
const KOLOR_PODSWIETLENIA_KOLA = "green";

export default class PanResponderExample extends Component {
    _panResponder = {};
    _poprzedniLewo = 0;
    _poprzedniGora = 0;
    _styleKol = {};
    kolo = null;

    constructor(props) {
        super(props);
        this.state = {
            aktywneDotyki: 0,
            ruchX: 0,
            ruchY: 0,
            x0: 0,
            y0: 0,
            dx: 0,
            dy: 0,
            vx: 0,
            vy: 0
        };
    }

    UNSAFE_componentWillMount() {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: this._obslugaStartUstawPanResponder,
            onMoveShouldSetPanResponder: this._obslugaRuchUstawPanResponder,
            onPanResponderGrant: this._obslugaPanResponderPrzyznano,
            onPanResponderMove: this._obslugaPanResponderRuch,
            onPanResponderRelease: this._obslugaPanResponderKoniec,
            onPanResponderTerminate: this._obslugaPanResponderKoniec
        });
        this._poprzedniLewo = 20;
        this._poprzedniGora = 84;
        this._styleKol = {
            style: {
                left: this._poprzedniLewo,
                top: this._poprzedniGora
            }
        };
    }

    componentDidMount() {
        this._zaktualizujPozycje();
    }

    render() {
        return (
            <View style={styles.kontener}>
                <View
                    ref={kolo => {
                        this.kolo = kolo;
                    }}
                    style={styles.kolo}
                    {...this._panResponder.panHandlers}
                />
                <Text>
                    {this.state.aktywneDotyki} dotyków,
                    dx: {this.state.dx},
                    dy: {this.state.dy},
                    vx: {this.state.vx},
                    vy: {this.state.vy}
                </Text>
            </View>
        );
    }

    //_podświetl i _niePodswietl wywoływane są przez metody PanResponder'a
    //zapewniając użytkownikowi informację graficzną
    _podswietl = () => {
        this.kolo && this.kolo.setNativeProps({
            style: { backgroundColor: KOLOR_PODSWIETLENIA_KOLA }
        });
    };

    _niePodswietl = () => {
        this.kolo && this.kolo.setNativeProps({
            style: { backgroundColor: KOLOR_KOLA }
        });
    };

    //Za pomocą setNativeProps kontrolujemy właściwości koła
    _zaktualizujPozycje = () => {
        this.kolo && this.kolo.setNativeProps(this._styleKol);
    };

    _obslugaStartUstawPanResponder = (event, stanGestu) => {
        //Czy obsługa zdarzeń powinna być aktywna, jeśli użytkownik naciśnie koło?
        return true;
    };

    _obslugaRuchUstawPanResponder = (event, stanGestu) => {
        //Czy obsługa zdarzeń powinna być aktywna jeśli użytkownik przesunie palcem nad kołem?
        return true;
    };

    _obslugaPanResponderPrzyznano = (event, stanGestu) => {
        this._podswietl();
    };

    _obslugaPanResponderRuch = (event, stanGestu) => {
        this.setState({
            idStanu: stanGestu.stateID,
            ruchX: stanGestu.moveX,
            ruchY: stanGestu.moveY,
            x0: stanGestu.x0,
            y0: stanGestu.y0,
            dx: stanGestu.dx,
            dy: stanGestu.dy,
            vx: stanGestu.vx,
            vy: stanGestu.vy,
            aktywneDotyki: stanGestu.numberActiveTouches
        });

        //Obliczanie bieżącej pozycji za pomocą delt
        this._styleKol.style.left = this._poprzedniLewo + stanGestu.dx;
        this._styleKol.style.top = this._poprzedniGora + stanGestu.dy;
        this._zaktualizujPozycje();
    };

    _obslugaPanResponderKoniec = (event, stanGestu) => {
        this._niePodswietl();
        this._poprzedniLewo += stanGestu.dx;
        this._poprzedniGora += stanGestu.dy;
    };
}

const styles = StyleSheet.create({
    kolo: {
        width: ROZMIAR_KOLA,
        height: ROZMIAR_KOLA,
        borderRadius: ROZMIAR_KOLA / 2,
        backgroundColor: KOLOR_KOLA,
        position: "absolute",
        left: 0,
        top: 0
    },
    kontener: {
        flex: 1,
        paddingTop: 64
    }
});