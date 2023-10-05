# calcolo del prezzo del biglietto del treno ma più figo
- Procurarsi tutti gli elementi che ci servono dal DOM
  - Inizializzo diverse variabili per recuperare:
    - l'input dal DOM
    - la select dal DOM dove l'utente seleziona il range d'età
    - il pulsante dal DOM
    - lo span dal DOM dove stampo il prezzo finale

- Creare un event listener per ascoltare il click sul bottone
  - cliccato il bottone avviare il calcolo effettivo
    - recupero dall'input il valore dell'attributo value
    - calcolo il prezzo del biglietto
    - recupero dalla select il valore dell'attributo value
    - con l'utilizzo del valore della value del range d'età calcolo se va applicato lo sconto
      - SE range value = 1:
        applico lo sconto del 20%
      - ALTRIMENTI SE range value = 3:
        applico lo scondo del 40%
    - arrotondo il risultato del biglietto a 2 decimali
    - stampo il risultato con .innerHTML sullo span recuperato dal DOM