import Fisica from '../fisica';

test('Pessoa Física c/ tipo de documento CPF', () => {
  const pessoa = new Fisica('Bruccy');
  expect(pessoa.documento()).toEqual(`${pessoa.nome} possui CPF!`);
});
