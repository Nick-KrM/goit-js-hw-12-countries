// import refs from './refs';
import fetchCountries from './fetchCountry';
import countriesList from '../templates/countriesList.hbs';
import resultCountry from '../templates/resultCountry.hbs';
import errorTpl from '../templates/errorWarning.hbs';

const debounce = require('lodash.debounce');

const refs = {
    input: document.getElementById('inputlg'),
    results: document.querySelector('.results'),
};

function clearReults() {
    refs.results.innerHTML = '';
};

function markup(e) {
    const textInInput = e.target.value;
    const url = `https://restcountries.eu/rest/v2/name/${textInInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // const markup = countriesList(data);
            console.log(data)

            if (data.length > 10) {
                refs.results.innerHTML = errorTpl();
                setTimeout(() => { clearReults() }, 2000);
                return
            };

            if (data.length === 1) {
                refs.results.innerHTML = resultCountry(data);
                return
            };

            if (data.length > 1 && data.length <= 10) {
                refs.results.innerHTML = countriesList(data);
                return
            };
        })
        .catch(error => console.log(error));

};

refs.input.addEventListener('input', debounce(markup, 500));