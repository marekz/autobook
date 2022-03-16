const KLUCZ_API = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const ADRES_API = "https://api.openweathermap.org/data/2.5/weather?";

function kodUrl(kod) {
    return `${ADRES_API}q=${kod}&units=metric&APPID=${KLUCZ_API}&lang=pl`;
}

function szerDlaUrl(szer, dlu) {
    return `${ADRES_API}lat=${szer}&lon=${dlu}&units=metric&APPID=${KLUCZ_API}&lang=pl`
}

function pobierzPrognoze(url) {
    return fetch(kodUrl(url))
        .then(response => response.json())
        .then(responseJSON => {
            return {
                glowny: responseJSON.weather[0].main,
                opis: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error(error);
        });
}

function pobierzPrognozeKod(kod) {
    return pobierzPrognoze(kodUrl(kod));
}

function pobierzPrognozeWspolrzedne(szer, dlu) {
    return pobierzPrognoze(szerDlaUrl(szer, dlu))
}

export default { pobierzPrognozeKod: pobierzPrognozeKod,
    pobierzPrognozeWspolrzedne: pobierzPrognozeWspolrzedne
};
