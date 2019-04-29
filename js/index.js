//**Variables */

let name = '';
let cards = [];


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
    } else if (name == '') {
        $('#err-button').removeClass('hide');
        setTimeout(()=>{
           $('#err-button').addClass('hide');
        },3000)
    }
});

//** */


