import md5 from "react-native-md5";

export default class Karta {
    constructor(przod, tyl, idTalii) {
        this.przod = przod;
        this.tyl = tyl;
        this.idTalii = idTalii;
        this.id = md5(przod + tyl + idTalii);
    }

    ustawZObiektu(ob) {
        this.przod = ob.przod;
        this.tyl = ob.tyl;
        this.idTalii = ob.idTalii;
        this.id = ob.id;
    }

    static zObiektu(ob) {
        let c = new Karta(ob.przod, ob.tyl, ob.idTalii);
        c.ustawZObiektu(ob);
        return c;
    }
}