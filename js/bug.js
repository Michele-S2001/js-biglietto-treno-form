// CALCOLO BIGLIETTO HTML + JS

// -- recupero gli elementi dal DOM --
//  input km
const kmInputDomElement = document.getElementById('ticket-km');
// select
const discountSelDomElement = document.getElementById('discount');
// button
const ctaDomElement = document.querySelector('.cta-calc');
// ticket price area
const priceDomElement = document.getElementById('ticket-price');
// ticket name area
const nameDomElement = document.getElementById('ticket-name');
//ticket name input 
const nameInputDomElement = document.getElementById('user-full-name');
//ticket preview
const ticketPreviewDomElement = document.querySelector('.preview-section');
//ticket offer
const ticketOfferDescDomElement = document.getElementById('ticket-offer');

// -- ascolto il click sul bottone con un EventListener --

ctaDomElement.addEventListener('click', function () {

  //recupero il value dell'input km
  const kmNumber = parseFloat(kmInputDomElement.value);
  //recupero il valure dell'input nome e cognome
  const name = nameInputDomElement.value;
  
  if(isNaN(kmNumber) || kmNumber <= 0) {
    alert('VALORE KM NON VALIDO'); 
  } else if (name === "" || (!isNaN(parseInt(name)))) {
    alert('INSERIRE NOME');
  }  else {
    //calcolo il prezzo del biglietto
    const pricePerKm = 0.21;
    let ticketPrice = kmNumber * pricePerKm; 
  
    //recupero il value della select
    const ageRange = discountSelDomElement.value;
  
    //con ageRange creo delle istruzioni condizionali per applicare lo sconto
    if (ageRange == "1") {
      let discount = ticketPrice * 0.2;
      ticketPrice -= discount;
      ticketOfferDescDomElement.innerHTML = "Offerta Minorenni";
    } else if (ageRange == "3") {
      let discount = ticketPrice * 0.4;
      ticketPrice -= discount;
      ticketOfferDescDomElement.innerHTML = "Offerta Over65";
    } else {
      ticketOfferDescDomElement.innerHTML = "Offerta Standard";
    }
  
    //arrotondo il ticket price a 2 cifre decimali
    ticketPrice = ticketPrice.toFixed(2);
  
    //faccio apparire tutto il biglietto
    ticketPreviewDomElement.classList.remove('d-none');
    ticketPreviewDomElement.classList.add('d-block');
  
    //stampo il risultato con innerHTML nella ticket area
    
    priceDomElement.innerHTML = ticketPrice + '&euro;';
  
    //stampo il nome dell'utente sul biglietto
    nameDomElement.innerHTML = name;
  }
})
