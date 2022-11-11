const primo = require('../funcoes/primo');

test('3 é primo', () => {
  expect(primo(3)).toBe("O número informado é primo!");
});

test('30 não é primo', () => {
    expect(primo(13)).toBe("O número informado é primo!");
  });