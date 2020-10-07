/* eslint no-underscore-dangle: 0 */

const calculeIdade = (anoNascimento) => new Date().getFullYear() - anoNascimento;

class Pessoa {
  constructor(nome, sobrenome, anoNascimento = 0) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._anoNasciento = anoNascimento;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  get sobrenome() {
    return this._sobrenome;
  }

  set sobrenome(novoSobrenome) {
    this._sobrenome = novoSobrenome;
  }

  get idade() {
    return calculeIdade(this._anoNasciento);
  }

  get nomeCompleto() {
    return `${this._nome ?? ''} ${this._sobrenome ?? ''}`.trim();
  }

  obtenhaIdadeValida() {
    const idadeCalculada = this.idade;

    if (idadeCalculada === new Date().getFullYear()) {
      throw new Error('Idade inválida!');
    }

    return idadeCalculada;
  }

  documento() {
    return `${this._nome} não tem documento!`;
  }

  toString() {
    return `${this.nomeCompleto} - Possui ${this.idade} ano(s) - ${this.documento()}`;
  }
}

export default Pessoa;
