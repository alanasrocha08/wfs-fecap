// "Serviço" de acesso a dados. Hoje busca arquivos JSON estáticos, mas a
// ideia é que a assinatura das funções (recebem nada ou um id, retornam
// uma Promise com os dados) seja a MESMA que a aula 07 vai usar para
// falar com a API de verdade feita em Express (aula 09+).

var BASE_DADOS = "dados/";

/**
 * Busca a lista de lugares.
 * @returns {Promise<Array>} lista de lugares
 * @throws {Error} se a resposta HTTP não for bem-sucedida (ok === false)
 */
async function buscarLugares() {
  const resposta = await fetch(BASE_DADOS + "lugares.json")
  if(!resposta.ok){
    
  }
}

/**
 * Busca a lista de avaliações.
 * @returns {Promise<Array>} lista de avaliações
 * @throws {Error} se a resposta HTTP não for bem-sucedida (ok === false)
 */
async function buscarAvaliacoes() {
  // TODO (Aula 04): igual à função acima, mas buscando
  // BASE_DADOS + "avaliacoes.json".
}

/**
 * Usada para demonstrar o tratamento de erro: busca um arquivo que não
 * existe, então o fetch resolve com `resposta.ok === false` (HTTP 404).
 */
async function buscarCaminhoInexistente() {
  // TODO (Aula 04): busque BASE_DADOS + "arquivo-que-nao-existe.json" e
  // lance um Error quando a resposta não for `ok`. Isso vai alimentar o
  // botão "Simular erro (404)" da página.
}
