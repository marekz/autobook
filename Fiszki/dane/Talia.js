import md5 from "react-native-md5";

class Talia {
    constructor(nazwa) {
        this.nazwa = nazwa;
        this.id = md5("deck:" + nazwa);
        this.karty = [];
    }

    ustawZObiektu(ob) {
        this.nazwa = ob.nazwa;
        this.karty = ob.karty;
        this.id = ob.id;
    }

    static zObiektu(ob) {
        let d = new Talia(ob.nazwa);
        d.ustawZObiektu(ob);
        return d;
    }

    dodajKarte(karta) {
        this.karty = this.karty.concat(karta);
    }
}

export default Talia;