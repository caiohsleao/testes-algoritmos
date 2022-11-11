const mdc = require('../funcoes/mdc');

test('O MDC de 4 e 9 é  1', () => {
    expect(mdc(4, 9)).toBe('O MDC entre o número 4 e o número 9 é 1');
});

test('O MDC de 10 e 105 é 5', () => {
    expect(mdc(10, 105)).toBe('O MDC entre o número 10 e o número 105 é 5');
});