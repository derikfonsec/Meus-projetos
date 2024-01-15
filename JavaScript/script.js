let tarefas = [];

function adicionarTarefa(tarefa) {
    tarefas.push(tarefa);
}

function removerTarefa(index) {
    tarefas.splice(index, 1);
}

function marcarTarefas(index) {
    tarefas[index].done = true;
}

