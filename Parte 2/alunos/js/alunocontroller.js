//READ

function listarAlunos(){

    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let tabela = document.getElementById("tabela-body");
    tabela.innerHTML = ""; 
    alunos.forEach((aluno, key) => {
        tabela.innerHTML += `<tr>
                                <td>${key}</td>
                                <td>${aluno.nome}</td>
                                <td>${aluno.email}</td>
                                <td>${aluno.telefone}</td>
                                <td>${aluno.cidade}</td>
                                <td>
                                    <button class="btn btn-warning">Editar</button>
                                    <button class="btn btn-danger" onclick="deletarAluno(${key})">Excluir</button>
                                </td>
                            </tr>`;
    })
}

//create
function salvarAluno(){
    event.preventDefault();
    let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    } 
    alunos.push(aluno);

    localStorage.setItem('alunos', JSON.stringify(alunos));
    alert("Salvo com sucesso!");


}

    //update

    function atualizarAluno(){}

    //delete

    function deletarAluno(id){
        let alunos = JSON.parse(localStorage.getItem('alunos')) || [];
        let alunosAtualizados = [];

        alunos.forEach((aluno, key) => {
            if(id != key){
                alunosAtualizados.push(aluno);
            }

        });

        localStorage.setItem('alunos', JSON.stringify(alunosAtualizados));

        alert("Excluido!");

        listarAlunos()
    }