let tarefas = [];

        function adicionarTarefa(tarefa) {
            tarefas.push({ description: tarefa, done: false });
            atualizarListaTarefas();
        }

        function removerTarefa(index) {
            tarefas.splice(index, 1);
            atualizarListaTarefas();
        }

        function marcarTarefas(index) {
            tarefas[index].done = true;
            atualizarListaTarefas();
        }

        function atualizarListaTarefas() {
            const tarefasDiv = document.querySelector('.tarefas');
            tarefasDiv.innerHTML = '';

            tarefas.forEach((tarefa, index) => {
                const tarefaElement = document.createElement('div');
                tarefaElement.innerHTML = `
                    <span>${tarefa.description}</span>
                    <button onclick="removerTarefa(${index})">Remover</button>
                    <button onclick="marcarTarefas(${index})">Concluir</button>
                `;
                if (tarefa.done) {
                    tarefaElement.classList.add('concluida');
                }
                tarefasDiv.appendChild(tarefaElement);
            });
        }

        function adicionarComEnter(event) {
            if (event.key === 'Enter') {
                adicionarTarefa(document.getElementById('nova-tarefa').value);
            }
        }

        // Atualiza a lista de tarefas inicialmente (pode ser removido se desejar)
        atualizarListaTarefas();