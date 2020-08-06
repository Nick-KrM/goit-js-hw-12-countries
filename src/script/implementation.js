import markup from './markup';
import refs from './refs';


const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(markup, 500));