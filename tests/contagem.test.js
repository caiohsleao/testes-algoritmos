const contagem = require('../funcoes/contagem');

test('A contagem de 0 a 10 deve ser 10', () => {
    expect(contagem(10)).toBe(10);
});

test('A contagem de 0 a 1000 deve ser 1000', () => {
    expect(contagem(1000)).toBe(1000);
});

