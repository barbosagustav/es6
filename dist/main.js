"use strict";

function Alunos(nomeDoAluno, notaDoAluno) {
  this.nome = nomeDoAluno;
  this.nota = notaDoAluno;
}
var turma = [];
var aluno1 = new Alunos("João", 7);
var aluno2 = new Alunos("Maria", 6);
var aluno3 = new Alunos("Lucas", 10);
var aluno4 = new Alunos("Ana", 9);
var aluno5 = new Alunos("Junior", 8);
var aluno6 = new Alunos("Helena", 4);
turma.push(aluno1, aluno2, aluno3, aluno4, aluno5, aluno6);
var aprovados = turma.filter(function (turma) {
  return turma.nota >= 6;
});
console.log(aprovados);