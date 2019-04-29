//**Variables */

let name = '';
let level;
let attempts;
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

//** */


