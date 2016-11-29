window.addEventListener('DOMContentLoaded', function(e){
    document.querySelector('.nav.hamburguer')
        .addEventListener('click', function(){
            document.querySelector('.nav.menu').classList.toggle('open');
        }, false);
}, false);