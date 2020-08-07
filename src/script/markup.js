import countriesList from '../templates/countriesList.hbs';
import resultCountry from '../templates/resultCountry.hbs';
import IncompleteRequest from '../templates/IncompleteRequest.hbs';
import incorrectRequest from '../templates/incorrectRequest.hbs';
import refs from './refs';

function markup(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    if (!inputValue) {
        refs.results.innerHTML = '';
        return
    }
    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                refs.results.innerHTML = incorrectRequest();
            }
        })
        .then(data => {
            refs.results.innerHTML = '';

            if (data.length > 10) {
                refs.results.insertAdjacentHTML('beforeend', IncompleteRequest());
                return
            };

            if (data.length === 1) {
                refs.results.insertAdjacentHTML('beforeend', resultCountry(data));
                return
            };

            if (data.length) {
                refs.results.insertAdjacentHTML('beforeend', countriesList(data));
                return
            };
        })
        .catch(() => {
            if (inputValue !== '') {
                refs.results.innerHTML = incorrectRequest();
            }
            console.log('some error')
        });

};

export default markup;