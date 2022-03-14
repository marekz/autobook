const API_KEY = "O6sgevp5rrMXMRAHsR4rVgyipNGTHFJN";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function pobierzKsiazki(list_name = LIST_NAME) {
    let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
    console.log(url);
    return fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            return responseJson.results.books;
        })
        .catch(error => {
            console.error(error);
        });
}

export default { pobierzKsiazki: pobierzKsiazki };