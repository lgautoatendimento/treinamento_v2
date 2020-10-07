import Pessoa from '../pessoa';

test('Pessoa c/ nome completo vazio', () => {
  const pessoa = new Pessoa();
  expect(pessoa.nomeCompleto).toEqual('');
});

test('Pessoa c/ nome completo', () => {
  const pessoa = new Pessoa("Thiago", "Gonzaga");
  expect(pessoa.nomeCompleto).toEqual('Thiago Gonzaga');
});

test('Pessoa c/ idade = ao ano atual', () => {
  const pessoa = new Pessoa("Thiago", "Gonzaga");

  expect(pessoa.obtenhaIdadeValida.bind(pessoa)).toThrow('Idade inválida!');
});
