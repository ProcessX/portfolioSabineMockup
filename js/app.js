var work__li;

$(document).ready(function(){
    console.log('Ready');

    $('.btn--burger').click(() => {
        toggleBurger();
    });

    initWorkList();
});


toggleBurger = () => {
    console.log('Open Burger');
    $('.btn--burger').toggleClass('btn--burger--open');
    $('.navbar').toggleClass('navbar--open');
}


initWorkList = () => {
    work__li = $('.work__el');

    console.log(work__li);

    for(let i = 0; i < work__li.length; i++){
        console.log(work__li[i]);
    }
}