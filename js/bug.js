// CALCOLO BIGLIETTO HTML + JS

// -- recupero gli elementi dal DOM --
//  input
const kmInputDomElement = document.getElementById('ticket-km');
// select
const discountSelDomElement = document.getElementById('discount');
// button
const ctaDomElement = document.querySelector('.cta-calc');
// ticket price area
const priceDomElement = document.getElementById('ticket-price');

// -- ascolto il click sul bottone con un EventListener --

ctaDomElement.addEventListener('click', function () {

  //recupero il value dell'input
  const kmNumber = parseFloat(kmInputDomElement.value);

  //calcolo il prezzo del biglietto
  const pricePerKm = 0.21;
  let ticketPrice = kmNumber * pricePerKm; 

  //recupero il value della select
  const ageRange = discountSelDomElement.value;

  //con ageRange creo delle istruzioni condizionali per applicare lo sconto
  if (ageRange == "1") {
    let discount = ticketPrice * 0.2;
    ticketPrice -= discount;
  } else if (ageRange == "3") {
    let discount = ticketPrice * 0.4;
    ticketPrice -= discount;
  }

  //arrotondo il ticket price a 2 cifre decimali
  ticketPrice = ticketPrice.toFixed(2);

  //stampo il risultato con innerHTML nella ticket area
  priceDomElement.innerHTML = ticketPrice + '&euro;';
})
