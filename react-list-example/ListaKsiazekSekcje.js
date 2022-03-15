import React, {Component} from "react";
import { StyleSheet, Text, View, Image, SectionList } from "react-native";
import Ksiazka from "./Ksiazka";
import NYT from "./NYT";

export default class ListaKsiazekSekcje extends Component {
    constructor(props) {
        super(props);
        this.state = { sekcje: [] };
    }

    componentDidMount() {
        this._odswiezDane();
    }

    _dodajKluczeDoKsiazek = ksiazki => {
        return ksiazki.map(ksiazka => {
            return Object.assign(ksiazka, { key: ksiazka.title });
        });
    };

    _odswiezDane = () => {
        Promise
            .all([
                NYT.pobierzKsiazki("hardcover-fiction"),
                NYT.pobierzKsiazki("hardcover-nonfiction")
            ])
            .then(results => {
                if (results.length !== 2) {
                    console.error("Nieoczekiwane wyniki!");
                }

                this.setState({
                    sekcje: [
                        {
                            title: "Fikcja w twardej okładce",
                            data: this._dodajKluczeDoKsiazek(results[0])
                        },
                        {
                            title: "Literatura faktu w twardej okładce",
                            data: this._dodajKluczeDoKsiazek(results[1])
                        }
                    ]
                });
            });
    };

    _renderujElement = ({ item }) => {
        return (
            <Ksiazka
                okladkaURL={item.book_image}
                tytul={item.key}
                autor={item.autor}
            />
        );
    };

    _renderujNaglowek = ({ section }) => {
        return (
            <Text style={styles.tekstNaglowka}>
                {section.title}
            </Text>
        );
    };

    render() {
        return (
                <SectionList
                    sections={this.state.sekcje}
                    renderItem={this._renderujElement}
                    renderSectionHeader={this._renderujNaglowek}
                />
        );
    }
}

const styles = StyleSheet.create({
    kontener: {
        flex: 1,
        paddingTop: 22
    },
    tekstNaglowka: {
        fontSize: 24,
        alignSelf: "center",
        backgroundColor: "#FFF",
        fontWeight: "bold",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 2
    }
});