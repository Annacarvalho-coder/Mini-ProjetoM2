class Aluno {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  const alunos = [];
  
  function atualizarTabela() {
    const listaAlunos = document.getElementById('alunos-lista');
    listaAlunos.innerHTML = '';
  
    alunos.forEach((aluno, index) => {
      const row = document.createElement('tr');
  
      const nomeCell = document.createElement('td');
      nomeCell.textContent = aluno.nome;
      row.appendChild(nomeCell);
  
      const idadeCell = document.createElement('td');
      idadeCell.textContent = aluno.idade;
      row.appendChild(idadeCell);
  
      const acoesCell = document.createElement('td');
  
      const editarBtn = document.createElement('button');
      editarBtn.textContent = 'Editar';
      editarBtn.onclick = () => editarAluno(index);
      acoesCell.appendChild(editarBtn);
  
      const deletarBtn = document.createElement('button');
      deletarBtn.textContent = 'Deletar';
      deletarBtn.onclick = () => deletarAluno(index);
      acoesCell.appendChild(deletarBtn);
  
      row.appendChild(acoesCell);
      listaAlunos.appendChild(row);
    });
  }
  
  function adicionarAluno() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
  
    if (nome && idade) {
      const novoAluno = new Aluno(nome, idade);
      alunos.push(novoAluno);
      atualizarTabela();
      document.getElementById('nome').value = '';
      document.getElementById('idade').value = '';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  function editarAluno(index) {
    const aluno = alunos[index];
    const novoNome = prompt('Novo nome:', aluno.nome);
    const novaIdade = prompt('Nova idade:', aluno.idade);
  
    if (novoNome && novaIdade) {
      alunos[index].nome = novoNome;
      alunos[index].idade = novaIdade;
      atualizarTabela();
    } else {
      alert('Valores inválidos.');
    }
  }
  
  function deletarAluno(index) {
    alunos.splice(index, 1);
    atualizarTabela();
  }
  
  atualizarTabela();
  