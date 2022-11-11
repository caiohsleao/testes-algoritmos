const quicksort = require('../funcoes/quicksort');

test('números fornecidos : 45, 20, 7, 89 / números ordenados: 7 , 20 , 45 , 89', () => {
  expect(quicksort([45, 20, 7, 89])).toMatchObject([7 , 20 , 45 , 89]);
});

test('números fornecidos : 23 , 1 , 46 , 4 , 2 / números ordenados: 1 , 2 , 4 , 23 , 46', () => {
    expect(quicksort([23 , 1 , 46 , 4 , 2])).toMatchObject([1, 2, 4, 23 , 46]);
  });