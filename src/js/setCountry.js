export default function getCountry(data) {
  if (data.length <= 10 && data.length >= 2) {
    return data
      .map(
        elem =>
          `<li>
        <img src="${elem.flags.svg}" width='70'>
    <p><b>${elem.name.official}</b></p>
  </li>`
      )
      .join('');
  } else if (data.length === 1) {
    return `<div class='cont__flex'>
            <img src="${data[0].flags.svg}" width='70' height='40'>
            <p><b>${data[0].name.official}</b></p></div>
            <p><b>Capital:</b> ${data[0].capital}</p>
            <p><b>Population:</b> ${data[0].population}</p>
            <p><b>Languages:</b> ${Object.values(data[0].languages).join(', ')}</p>`;
  }
}
