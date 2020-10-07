import pessoa from './pessoa';

class Juridica extends pessoa {
  documento() {
    return `${this.nome} possui CNPJ!`;
  }
}

export default Juridica;
