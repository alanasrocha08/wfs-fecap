// Funções utilitárias puras para trabalhar com um array de avaliações.
// Nenhuma delas deve tocar no DOM — recebem dados, devolvem dados.
// Implemente o corpo de cada função abaixo. Use testes.html para
// verificar seu progresso: cada assertiva vira uma linha ✅ ou ❌ na tela.

/**
 * Calcula a média das notas de um array de avaliações.
 * @param {Array<{nota:number}>} avaliacoes
 * @returns {number} média arredondada para 1 casa decimal, ou 0 se a lista estiver vazia
 */
function calcularMedia(avaliacoes) {
  // TODO (Aula 03): some todas as notas de `avaliacoes` e divida pela
  // quantidade de avaliações. Se o array estiver vazio, retorne 0 (evite
  // dividir por zero). Arredonde o resultado para 1 casa decimal — dica:
  // Math.round(valor * 10) / 10.
  if(!avaliacoes || avaliacoes.length === 0){   // ! exclamaçãp neste contexte, significa "não" ou negação e || operador lógico "OU"
    return 0 
  }

  const soma = avaliacoes.reduce(function(total, avaliacoes){
    return total + avaliação.nota;
  }, 0)
  return Math.round((soma / avaliacoes.length)*10)/10
}

/**
 * Filtra as avaliações de um lugar específico.
 * @param {Array<{lugarId:number}>} avaliacoes
 * @param {number} lugarId
 */
function filtrarPorLugar(avaliacoes, lugarId){
  return avaliacoes.filter(function(avaliacao){
    return avaliacao.lugarId === lugarId
})
}
/**
 * Filtra avaliações com nota maior ou igual a `notaMinima`.
 * @param {Array<{nota:number}>} avaliacoes
 * @param {number} notaMinima
 */
function filtrarPorNotaMinima(avaliacoes, notaMinima) {
  return avaliacoes.filter(function(avaliacao){
    return avaliacao.nota >= notaMinima
  })
}

/**
 * Retorna uma NOVA lista de avaliações ordenada por nota.
 * @param {Array<{nota:number}>} avaliacoes
 * @param {"asc"|"desc"} [ordem="desc"]
 */
function ordenarPorNota(avaliacoes, ordem) {
  ordem = ordem || "desc"
  const copia = avaliacoes.slice()
  copia.sort(function(arguments, b){
    return ordem === "asc" ? arguments.nota - b.nota : b.nota - arguments.nota
  })
  return copia
}

//operador ternário
//Estrutura:
//condicao ? valorSeVardadeiro: valorSeFalso
