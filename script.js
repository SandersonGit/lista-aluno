// Função para cadastrar um aluno
function cadastrarAluno() {
    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
  
    if (!nome || !matricula) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const aluno = { nome, matricula };
    adicionarAlunoLista(aluno);
  }
  
  // Função para adicionar um aluno à lista
  function adicionarAlunoLista(aluno) {
    const listaAlunos = document.getElementById("lista-alunos");
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `
      ${aluno.nome} - ${aluno.matricula}
      <button onclick="excluirAluno(this)">Excluir</button>
    `;
    listaAlunos.appendChild(itemLista);
    
  }
  
  // Função para excluir um aluno da lista
  function excluirAluno(botao) {
    const itemLista = botao.parentNode;
    itemLista.parentNode.removeChild(itemLista);
  }
  