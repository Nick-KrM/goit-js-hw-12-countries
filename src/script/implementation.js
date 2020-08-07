import markup from './markup';
import refs from './refs';
import debounce from 'lodash.debounce'; // ES6

// const debounce = require('lodash.debounce'); // ES5

refs.input.addEventListener('input', debounce(markup, 500));