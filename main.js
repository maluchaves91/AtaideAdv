function redirecionarParaIndex() {
    window.location.href = "index.html#area";
}

var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        nav.classList.add('navbarvermelho', 'shadow');
        var textElements = nav.querySelectorAll('.colornav'); // Substitua 'colornav' pela classe real dos elementos de texto
        textElements.forEach(function (element) {
            element.style.color = 'white';
        });
    } else {
        nav.classList.remove('navbarvermelho', 'shadow');
        var textElements = nav.querySelectorAll('.colornav'); // Substitua 'colornav' pela classe real dos elementos de texto
        textElements.forEach(function (element) {
            element.style.color = ''; // Isso remove a cor definida, voltando ao estilo padrão
        });
    }
});



