class Usuario {
  constructor(id, nome, email, senhaHash) {
    if (typeof nome !== "string" || nome.trim().length < 2) {
      throw new ErroValidacao("Nome do usuário deve ter pelo menos 2 acracteres", "" )
    }
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+@[^\s@]+$/.test(email)){
      throw new ErroValidacao("Email Inválido", "email");
    }
    if(typeof senhaHash !== "string" || senhaHash.trim().length === 0) {
      throw new ErrorValidacao("senhaHash é obrigatório ( a senha em texto puro nunca deve ser armazenada como texto puro", "senhaHash");
    }
    this.id = id
    this.nome = nome.trim()
    this.email = email.trim().toLowerCase()
  }
}
