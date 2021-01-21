// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.



// Milestone 1:
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
arrayColori = ['green', 'orange', 'blue', 'grey'];

arrayIcone.forEach( (element) => {
  let {tipo} = element;

  console.log('tipo vale: ' + tipo);
  console.log(element.colore);
  // Colore di default
  element.colore = 'grey';

  if (tipo === 'utenti' ){
    element.colore = 'green';
  }
  if (tipo === 'mp3' ){
    element.colore = 'orange';
  }
  if (tipo === 'animali' ){
    element.colore = 'blue';
  }

  console.log(element.colore);

});


arrayIcone.forEach( (element) =>{
  let {nome, prefisso, famiglia, colore} = element
  allIconsBoxHtml.innerHTML +=`
  <div class="icon-box">
    <i class='${famiglia} ${prefisso}-${nome}' style="color:${colore}"> </i>
    <div> ${nome} </div>
  </div>
  `;
});

// arrayIcone.forEach( (element) =>{
//   for (var key in element) {
//     console.log('key :' + element[key]);
//   }
//   console.log('');
// });


// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
let iconFilterTypeHtml = document.getElementById('icon-filter-type');

arrayColori.forEach( (element) =>{

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
    let {nome, prefisso, famiglia, colore} = element;
    // console.log (`
    //   colore: ${colore}
    //   selezione: ${$(this).val()}`);
    if(colore === $(this).val()){
      $('.all-icons-box').append(`
      <div class="icon-box">
        <i class='${famiglia} ${prefisso}-${nome}' style="color:${colore}"> </i>
        <div> ${nome} </div>
      </div>
      `);
    }
  });

});
