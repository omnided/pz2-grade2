import { add, capitalize, formatNumber } from './index.js';

// ПОМИЛКА ЛІНТИНГУ навмисно: подвійні лапки

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(bad):', formatNumber(123.456, { precision: 2 }));
