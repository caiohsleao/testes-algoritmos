const fibonacci = require('../funcoes/fibonacci');

test('os 10 primeiros numeros devem ser corretos', () => {
    expect(fibonacci(10)).toMatchObject([0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34]);
});

test('os 2 primeiros numeros devem ser 0 e 1', () => {
    expect(fibonacci(2)).toMatchObject([0 , 1]);
});
