import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './js/fetchCountries';
import getCountry from './js/setCountry';

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.getElementById('search-box'),
  listOfCountry: document.querySelector('.country-list'),
  countryContainer: document.querySelector('.country-info'),
};

const { input, listOfCountry, countryContainer } = refs;

input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(evt) {
  if (!evt.target.value) {
    return;
  }

  if (evt.target.value.trim() === '') {
    evt.target.value = '';
    return Notiflix.Notify.info('Enter only letters!');
  }

  fetchCountries(evt.target.value)
    .then(data => {
      listOfCountry.innerHTML = '';
      countryContainer.innerHTML = '';

      if (data.length > 10) {
        return Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (data.length <= 10 && data.length >= 2) {
        listOfCountry.insertAdjacentHTML('beforeend', getCountry(data));
      } else if (data.length === 1) {
        countryContainer.insertAdjacentHTML('beforeend', getCountry(data));
      }
    })
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
}
