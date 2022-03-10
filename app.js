var modalBtn = document.querySelector('.modal-btn');
var modalShow = document.querySelector('.modal-show');
var modalClose = document.querySelector('.modal-close');
var sec = document.querySelector('.container');

modalBtn.addEventListener('click', function(){
    modalShow.style.visibility = 'visible';
    modalShow.style.zIndex = '1';
    sec.style.zIndex = '2';
});

modalClose.addEventListener('click', function (){
    modalShow.style.visibility = 'hidden';
})