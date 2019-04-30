//**Variables */

let name = '';
let easy = false;
let medium = false;
let expert = false;
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

//**Pushing the cards  */

let imgLength = $('.front').length;
for(let i = 0; i < imgLength;i++){
    $('.front').eq(i).attr('data-img',cards[i]);
};

$('.front').on('click',()=>{
    let visible = $(this).attr('data-img');
    $(this).attr('src',visible);
})




