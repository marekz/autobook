import React, {Component} from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import Ksiazka from "./Ksiazka";

const testoweKsiazki = [
    {
        rank: 1,
        title: "GATHERING PREY",
        autor: "John Sandford",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
    },
    {
        rank: 2,
        title: "MEMORY RAN",
        autor: "David Baldacci",
        book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
    }
];

export default class ListaKsiazekTest extends Component {
    constructor(props) {
        super(props);
        this.state = { dane: this._dodajKluczeDoKsiazek(testoweKsiazki) }
    }

    _renderujElement = ({ item }) => {
        return (
            <Ksiazka
                okladkaURL={item.book_image}
                tytul={item.key}
                autor={item.autor}
            />
        );
    };

    _dodajKluczeDoKsiazek = ksiazki => {
        return ksiazki.map(ksiazka => {
            return Object.assign(ksiazka, { key: ksiazka.title });
        });
    };

    render() {
        return <FlatList data={this.state.dane} renderItem={this._renderujElement} />;
    }
}

const styles = StyleSheet.create({
    kontener: {
        flex: 1,
        paddingTop: 22
    }
});