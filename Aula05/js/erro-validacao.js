// Class - cria uma Classe
//extends herda de outra classe
//Error - Classe padrão de erros do JS
// new - cria um objeto 
//super() - chama o construtor da classe api
// this - representa o objetto atual
// throw - lança o erro
//instanceof - Verifica de qual classe o objeto veio

class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    super(mensagem)
    this.name = "ErroValidacao"
    this.campo = campo
  }
}
