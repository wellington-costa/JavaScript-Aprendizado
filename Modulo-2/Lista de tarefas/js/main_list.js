function ListaTarefas(){

    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefa = document.querySelector('.btn-add-tarefa');
    const tarefas = document.querySelector('.tarefas');


    function criaLi() {
        const li = document.createElement('li');
        return li;
    }

    function addTarefa(texto) {

        if (texto !== '') {
            const li = criaLi();
            li.innerText = texto;
            tarefas.appendChild(li);
            limpaInput();
            criaBtnApagar(li);
        }
    }


    btnTarefa.addEventListener('click', function (e) {

        addTarefa(inputTarefa.value);

    });

    inputTarefa.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            addTarefa(inputTarefa.value);
        }
    });
    document.addEventListener('click', function (e) {
        const btn = e.target;
        console.log(btn);
        if (btn.classList.contains('apagar')) {
            btn.parentElement.remove();
            inputTarefa.focus();
        }
    });

    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBtnApagar(li) {
        li.innerText += ' ';
        const btnApagar = document.createElement('button');
        btnApagar.innerText = 'Remover';
        btnApagar.title = "Remover tarefa";
        btnApagar.setAttribute('class', 'apagar');
        li.appendChild(btnApagar);
    }
}