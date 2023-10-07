//Task2

let url = `https://restcountries.com/v3.1/name/azerbaijan`;
axios.get(url).then(({ data }) => {
  console.log(data);

  data.forEach(
    ({
      cca2,
      borders,
      area,
      altSpellings,
      capital,
      currencies,
      currencies:{AZN,AZN:{name},AZN:{symbol}},
      flags,
      suffixes,
      coatOfArms,
    }) => {
      root.innerHTML += `<p>${cca2}</p>
        <p>Tam adi:${altSpellings[2]}</p>
        <p>Milli valyuta:${name}</p>
        <p>Pul vahidi:${symbol}</p>
        <p>Paytaxti:${capital}</p>
        <p>Qonsulari:${borders}</p>
        <p>Erazi:${area}km</p>
        <img class="gerb" src="${coatOfArms.png}">        
        <img class="bayraq" src="${flags.png}">
    
        `;
    }
  );
});
