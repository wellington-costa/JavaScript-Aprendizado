function timer() {

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function iniciarRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const button = e.target;
        if (button.classList.contains('zerar')) {
            segundos = 0;
            relogio.classList.remove('executando');
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
        }
        if (button.classList.contains('pausar')) {
            relogio.classList.remove('executando');
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (button.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            relogio.classList.add('executando');
            clearInterval(timer);
            iniciarRelogio();
        }
    })

}

timer();