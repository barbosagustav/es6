function Alunos(nomeDoAluno, notaDoAluno) {
    this.nome = nomeDoAluno
    this.nota = notaDoAluno
}

const turma = []

const aluno1 = new Alunos ("João", 7)
const aluno2 = new Alunos ("Maria", 6)
const aluno3 = new Alunos ("Lucas", 10)
const aluno4 = new Alunos ("Ana", 9)
const aluno5 = new Alunos ("Junior", 8)
const aluno6 = new Alunos ("Helena", 4)

turma.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6)

const aprovados = turma.filter((turma) => {
    return turma.nota >= 6;
})

console.log(aprovados)