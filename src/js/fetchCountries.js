function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=capital,population,languages,name,flags`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    });
}

export { fetchCountries };
