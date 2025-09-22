import { add, capitalize, formatNumber, groupBy, type User } from './index.js';

// ПОМИЛКА ЛІНТИНГУ навмисно: подвійні лапки

console.log('sum(typed):', add(2, 3));
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(bad):', formatNumber(123.456, { precision: 2 }));

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// ПОМИЛКА ТИПІВ: ключа "age" у User не існує
console.log('group wrong:', groupBy(users, 'name'));
