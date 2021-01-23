// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.



// Todo:
/*
- utilizzo di funzioni
- separare funzioni di manipolazione dati da quelle di rendering grafico HTML
- utilizzo di jquery solamente per l'evento change
*/






// Milestone 1: Definizione dei dati
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

console.log('Milestone 1*****************************************************');
const arrayIcone = [
  {
    nome: 'user',
    prefisso: 'fa',
    tipo: 'utenti',
    famiglia: 'fas'
  },
  {
    nome: 'users',
    prefisso: 'fa',
    tipo: 'utenti',
    famiglia: 'fas'
  },
  {
    nome: 'user-tie',
    prefisso: 'fa',
    tipo: 'utenti',
    famiglia: 'fas'
  },
  {
    nome: 'backward',
    prefisso: 'fa',
    tipo: 'mp3',
    famiglia: 'fas'
  },
  {
    nome: 'play',
    prefisso: 'fa',
    tipo: 'mp3',
    famiglia: 'fas'
  },
  {
    nome: 'forward',
    prefisso: 'fa',
    tipo: 'mp3',
    famiglia: 'fas'
  },
  {
    nome: 'cat',
    prefisso: 'fa',
    tipo: 'testdefault',
    famiglia: 'fas'
  },
  {
    nome: 'crow',
    prefisso: 'fa',
    tipo: 'animali',
    famiglia: 'fas'
  },
  {
    nome: 'dragon',
    prefisso: 'fa',
    tipo: 'animali',
    famiglia: 'fas'
  },
  {
    nome: 'otter',
    prefisso: 'fa',
    tipo: 'animali',
    famiglia: 'fas'
  },
  {
    nome: 'spider',
    prefisso: 'fa',
    tipo: 'animali',
    famiglia: 'fas'
  }
];

// Prendi elementi dal document Html
let allIconsBoxHtml = document.getElementsByClassName('all-icons-box')[0];

// AGGIORNATO IN MILESTONE 2
// arrayIcone.forEach( (element) =>{
//   let {nome, prefisso, famiglia, colore} = element
//   allIconsBoxHtml.innerHTML +=`
//   <div class="icon-box">
//     <i class="${famiglia} ${prefisso}-${nome}"> </i>
//     <div> ${nome} </div>
//   </div>
//   `;
// });


// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.
console.log('Milestone 2*****************************************************');

// Definizione di array di colori
arrayColori = ['green', 'orange', 'blue', 'lightcoral', 'pink', 'brown'];

// Definizione lista dei tipi icona + popolamento
const arrayTypes = []

arrayIcone.forEach( (element) => {

  // Inserisci nuovo tipo in array tipes
  if (arrayTypes.indexOf(element.tipo) === -1){
    arrayTypes.push(element.tipo);
  }

  // Codice colore icona
  element.codiceColore = arrayTypes.indexOf(element.tipo);

});

// Stampa icone su pagina HTML
arrayIcone.forEach( (element) =>{
  let {nome, prefisso, famiglia, codiceColore} = element

  //Ottieni colore usando codiceColore
  let colore = arrayColori[codiceColore];

  allIconsBoxHtml.innerHTML +=`
  <div class="icon-box">
    <i class='${famiglia} ${prefisso}-${nome}' style="color:${colore}"> </i>
    <div> ${nome} </div>
  </div>
  `;
});

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.

// Prendi elemento iconFilter dalla pagina HTML
let iconFilterTypeHtml = document.getElementById('icon-filter-type');

// Aggiungi valori al filtro per tipo HTML
arrayTypes.forEach( (element) =>{

  iconFilterTypeHtml.innerHTML +=`
    <option value="${element}">${element}</option>
  `;
});


// JQUERY - Evento change del filtro
$('#icon-filter-type').change(function(){

  // // Svuota Box
  $('.all-icons-box').text('');

  // // Popola Box
  arrayIcone.forEach( (element) =>{
    let {nome, prefisso, famiglia, tipo, codiceColore} = element;
    // console.log (`
    //   colore: ${colore}
    //   selezione: ${$(this).val()}`);

    let colore = arrayColori[codiceColore];

    if($(this).val() === tipo || ($(this).val() === 'all')){
      $('.all-icons-box').append(`
      <div class="icon-box">
        <i class='${famiglia} ${prefisso}-${nome}' style="color:${colore}"> </i>
        <div> ${nome} </div>
      </div>
      `);


    }
  });

});
