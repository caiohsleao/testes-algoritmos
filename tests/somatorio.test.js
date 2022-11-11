const somatorio = require('../funcoes/somatorio');

test('A soma entre 100 + 50 + 50 + 200 deve ser 400', () => {
  expect(somatorio([100,50,50,200])).toBe(400);
});

test('A soma entre 5 + 15 + 25 + 35 deve ser 80', () => {
    expect(somatorio([5, 15, 25, 35])).toBe(80);
  });