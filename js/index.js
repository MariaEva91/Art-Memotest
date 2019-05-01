//**Variables */

let name = '';
let easy = false;
let medium = false;
let expert = false;
let won = null;
let attempts = 0;
let attemptsMax = 0;
let difficulty = '';
let cards = [
    img1 = {
        src: 'imagenes/los-tres-musicos.jpg',
        id: 1
    },
    img2 = {
        src: 'imagenes/los-tres-musicos.jpg',
        id: 2
    },
    img3 = {
        src: 'imagenes/miro.jpg',
        id: 3
    },
    img4 = {
        src: 'imagenes/miro.jpg',
        id: 4
    },
    img5 = {
        src: 'imagenes/mona-lisa.jpg',
        id: 5
    },
    img6 = {
        src: 'imagenes/mona-lisa.jpg',
        id: 6
    },
    img7 = {
        src: 'imagenes/mondrian.jpg',
        id: 7
    },
    img8 = {
        src: 'imagenes/mondrian.jpg',
        id: 8
    },
    img9 = {
        src: 'imagenes/noche-estrellada.jpg',
        id: 9
    },
    img10 = {
        src: 'imagenes/noche-estrellada.jpg',
        id: 10
    },
    img11 = {
        src: 'imagenes/persistencia-de-la-memoria.jpg',
        id: 11
    },
    img12 = {
        src: 'imagenes/persistencia-de-la-memoria.jpg',
        id: 12
    }

];


//**Start game: login and choose level */

$('#startButton').on('click', () => {
    $('.menu-welcome').addClass('hide');
    $('.menu-login').removeClass('hide');
})

$('.level').on('click', () => {
    name = $('#input').val();
    if (name != '') {
        $('.menu-login').addClass('hide');
        $('.main-board').removeClass('hide');
        $('#name').append(` <span >` + name + ` </span>`);
    } else if (name == '') {
        $('#err-button').removeClass('hide');
        setTimeout(() => {
            $('#err-button').addClass('hide');
        }, 3000)
    }
});


//**Difficulty */
//**Level Easy */

$('#easy').on('click', () => {
    if (name != '') {
        easy = true;
        attemptsMax = 18;
        difficulty = 'Fácil';
        $('#attemptsMax').append(` <span >` + attemptsMax + ` </span>`);
        $('#levelChosen').append(` <span >` + difficulty + ` </span>`);
    }
})
//**Level medium */

$('#medium').on('click',()=>{
    if(name != ''){
        medium = true;
        attemptsMax = 12;
        difficulty = 'Intermedio';
        $('#attemptsMax').append(` <span >` + attemptsMax + ` </span>`);
        $('#levelChosen').append(` <span >` + difficulty + ` </span>`);
    }
})

//**Level Expert */

$('#expert').on('click',()=>{
    if(name != ''){
        expert = true;
        attemptsMax = 9;
        difficulty = 'Experto';
        $('#attemptsMax').append(` <span >` + attemptsMax + ` </span>`);
        $('#levelChosen').append(` <span >` + difficulty + ` </span>`);
    }
});

//**Random function */

function shuffle(cards) {
    let j
    let x
    let i
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = cards[i].id;
        cards[i].id = cards[j].id;
        cards[j].id = x;
    }
    return cards;
}
shuffle(cards);

//**Save dates for ranking at Local Storage */

function ranking(){
    let winner = {
        who: name,
        level: difficulty,
        howManyAttempts: attempts
    }
    let dataEasy = localStorage.getItem('winnerEasy');
    let dataMedium = localStorage.getItem('winnerMedium');
    let dataExpert = localStorage.getItem('winnerExpert');

    if (dataEasy == null){
        dataEasy = [];
    } else if (dataEasy != null) {
      dataEasy = JSON.parse(dataEasy)
    }
    
    if (dataMedium == null){
      dataMedium = [];
    } else if (dataMedium != null) {
    dataMedium = JSON.parse(dataMedium)
    }
    
    if (dataExpert == null){
      dataExpert = [];
    } else if (dataExpert != null) {
    dataExpert = JSON.parse(dataExpert)
    }
       
    if (winner.level == "Fácil") {
      dataEasy.push(winner)
    }
    
    if (winner.level == "Intermedio") {
      dataEasy.push(winner)
    }
    
    if (winner.level == "Experto") {
      dataEasy.push(winner)
    }
    
    dataEasy.sort(function(winnerA,winnerB){
       return winnerA.howManyAttempts - winnerB.howManyAttempts;
    })
    dataEasy.slice(0,3);
    
    dataMedium.sort(function(winnerA,winnerB){
      return winnerA.howManyAttempts - winnerB.howManyAttempts;
    })
    dataMedium.slice(0,3);
    
    dataExpert.sort(function(winnerA,winnerB){
      return winnerA.howManyAttempts - winnerB.howManyAttempts;
    })
    dataExpert.slice(0,3);
          
      localStorage.setItem('winnersEasy',JSON.stringify(dataEasy))
      localStorage.setItem('winnersMedium',JSON.stringify(dataMedium))
      localStorage.setItem('winnersExpert',JSON.stringify(dataExpert));

      //**Append ranking */
      //**Level easy */

     function rankingAppendEasy(){
         if((won === true) &&(winner.level == 'Fácil')){
             for(let i = 0; i <= dataEasy.length -1; i++ ){
                 $('.rankAppendEasy').append(`
                 <div><span>${dataEasy[i].who}</span></div>
                 <div><span>${dataEasy[i].level}</span></div>
                 <div><span>${dataEasy[i].howManyAttempts}</span></div>`)
             }
         }
      };
        //**level medium */
      function rankingAppendMedium(){
          if((won === true) && (winer.level == 'Intermedio')){
              for(let i = 0; i <= dataMedium.length -1;i++){
                  $('.rankAppendMedium').append(`
                  <div><span>${dataMedium[i].who}</span></div>
                 <div><span>${dataMedium[i].level}</span></div>
                 <div><span>${dataMedium[i].howManyAttempts}</span></div>
                  `)
              }
          }
      };
        //**Level Expert */
      function rankingAppendExpert(){
          if((won === true) && (winer.level == 'Experto')){
              for (let i = 0; i <= dataExpert.length -1;i++){
                  $('.rankAppendExpert').append(`
                  <div><span>${dataExpert[i].who}</span></div>
                  <div><span>${dataExpert[i].level}</span></div>
                  <div><span>${dataExpert[i].howManyAttempts}</span></div>
                  `)
              }
          }
      };

      rankingAppendEasy();
      rankingAppendMedium();
      rankingAppendExpert();

};


















//**Pushing the cards  */

let imgLength = $('.front').length;
for(let i = 0; i < imgLength;i++){
    $('.front').eq(i).attr('data-img',cards[i]);
   // console.log(cards)
};

//**Play again button*/

$('.again').on('click',()=>{
    location.reload();
});




