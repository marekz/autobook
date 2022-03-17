const KLUCZ_API = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const ADRES_API = "https://api.openweathermap.org/data/2.5/weather?";

function kodUrl(kod) {
    let url = `${ADRES_API}q=${kod}&units=metric&APPID=${KLUCZ_API}&lang=pl`;
    return url;
}
function szerDlaUrl(szer, dlu) {
    let url = `${ADRES_API}lat=${szer}&lon=${dlu}&units=metric&APPID=${KLUCZ_API}&lang=pl`
    return url;
}

function pobierzPrognoze(url) {
    return fetch(url)
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
