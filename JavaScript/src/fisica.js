import pessoa from './pessoa';

class Fisica extends pessoa {
  documento() {
    return `${this.nome} possui CPF!`;
  }
}

export default Fisica;
