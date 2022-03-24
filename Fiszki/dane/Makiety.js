import ModelKarty from "./Karta";
import ModelTalii from "./Talia";
import { stworzPowtorke } from "./WidokKartQuizu";

let MakietyKart = [
    new ModelKarty("der Hund", "the dog", "fakeDeckID"),
    new ModelKarty("das Kind", "the child", "fakeDeckID"),
    new ModelKarty("die Frau", "the woman", "fakeDeckID"),
    new ModelKarty("die Katze", "the cat", "fakeDeckID")
];

let MakietaKart = MakietyKart[0];
let MakietaPowtorki = stworzPowtorke(MakietyKart);
let MakietyTalii = [new ModelTalii("Francja"), new ModelTalii("Niemcy")];

MakietyTalii.map(talia => {
    talia.dodajKarte(new ModelKarty("der Hund", "the dog", talia.id));
    talia.dodajKarte(new ModelKarty("die Katze", "the cat", talia.id));
    talia.dodajKarte(new ModelKarty("das Brot", "the bread", talia.id));
    talia.dodajKarte(new ModelKarty("die Frau", "the woman", talia.id));
    return talia;
});

let Makietatalii = MakietyTalii[0];

export { MakietaPowtorki, MakietyKart, MakietaKart, MakietyTalii, Makietatalii };
