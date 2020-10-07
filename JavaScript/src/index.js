import Pessoa from './pessoa';
import Fisica from './fisica';
import Juridica from './juridica';

const pessoaGenerica = new Pessoa('Pessoa', 'Genérica');
const pessoaFisica = new Fisica('Helena', 'Gonzaga', 2019);
const pessoaJuridica = new Juridica('Thiago', 'Gonzaga', 1990);

console.log(pessoaGenerica.toString());
console.log(pessoaGenerica.obtenhaIdadeValida());
console.log(pessoaFisica.toString());
console.log(pessoaJuridica.toString());
