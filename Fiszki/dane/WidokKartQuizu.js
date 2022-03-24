import _ from "lodash";

class WidokKartQuizu {
    constructor(orientacja, idKarty, podpowiedz, poprawnaOdpowiedz, odpowiedz) {
        this.orientacja = orientacja;
        this.idKarty = idKarty;
        this.podpowiedz = podpowiedz;
        this.poprawnaOdpowiedz = poprawnaOdpowiedz;
        this.odpowiedz = odpowiedz;
    }
}

function stworzPowtorke(karty) {
    let stworzPowtorke = function(stronaPierwsza, stronaDruga) {
        return karty.map(karta => {
            let inne = karty.filter(innaKarta => {
                return innaKarta.id !== karta.id;
            });

            let odpowiedzi = _.shuffle(
                [karta[stronaDruga]].concat(_.sampleSize(_.map(inne, stronaDruga), 3))
            );

            return new WidokKartQuizu(
                stronaPierwsza,
                karta.id,
                karta[stronaPierwsza],
                karta[stronaDruga],
                odpowiedzi
            );
        });
    };

    let powtorki = stworzPowtorke("przod", "tyl").concat(
        stworzPowtorke("tyl", "przod")
    );
    return _.shuffle(powtorki);
}

export { stworzPowtorke, WidokKartQuizu }