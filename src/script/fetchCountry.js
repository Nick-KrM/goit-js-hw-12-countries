function fetchCountries(query) {
    const url = `https://restcountries.eu/rest/v2/name/${query}?fields=name;population;flag;languages;capital`;

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));

}

export default fetchCountries;