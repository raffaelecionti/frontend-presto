  let opener= document.querySelector('.opener');
  let circle = document.querySelector('.cirlce');

  let teachers= [
 {name:'Matteo', description:'docente frontend del corso Hackademy 69', url:'./media/matteopng.jpg'},
 {name:'Marco', description:'docente frontend e responsabile Hackademy', url:'./media/nicolapng.jpg'},
{name:'Nicola', description:'docente frontend e noto sex simbol', url:'./media/davidepng.jpg'},
{name:'Davide', description:'docente frontend e giocatore di ruolo', url:',/media/cpng.png'},
];


teachers.forEach( (docente) => {
let div = document.createElement('div');
div.classList.add('moved');
div.style.backgroundImage= `url(${docente.url})`;
circle.appendChild(div);
});


  let movedDivs= document.querySelectorAll('.moved');
let flipcard= document.querySelector('.flip-card');
  let check= false;

  opener.addEventListener('click', () => {
    if(check== false){
        opener.style.transform= `rotate(45deg)`;
     movedDivs.forEach( (moved) => {
    let angle= (360 * 1)  / movedDivs.length;
moved.style.transform= ``;`rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
});
check= true;  
    }else{
        check= false;
     opener.style.transform= ``;
      movedDivs.forEach( (moved) => {
moved.style.transform= ``;
});
cardWrapper.innerHTML='';
    }
  });


  let cardName= document.querySelector('#cardName');
  let cardDescription= document.querySelector('#cardDescription');
  let cardWrapper= document.querySelector('.card-wrapper');




  movedDuvs.forEach( (moved, i) => {
moved.addEventListener('click', () => {
    flipCard.classList.remove('d-none');
let docente= teachers[i];
cardWrapper.innerHTML='';
let div = document.createElement('div');
div.classList.add('flip-card');
div.innerHTML = `
 <div class="flip-card">
            <div class="inner">
                <div class="innerface"></div>
                <div class="inner-back">
                    <p id="cardName" class="h4">${docente.name}</p>
                    <p id="cardDescription" class="lead"></p>
                </div>
            </div>
`;

cardWrapper.appendChild('div');

let Innerface= document.querySelector('.inner-face');
InnerFace.style.backgroundImage=`url(${docente.url})`;

})
  });