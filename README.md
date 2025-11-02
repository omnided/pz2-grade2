# TypeScript Utility Library

Бібліотека надає набір утиліт для роботи з числами, рядками та логуванням у TypeScript-проектах. Вона включає функції для базових математичних операцій, форматування даних, маніпуляцій з рядками та структурованого логування. Бібліотека типобезпечна та підтримує конфігурацію через змінні оточення.

## Швидкий старт

### Встановлення залежностей
```text
npm i
```

### Запуск демо-прикладу
```text
npm run demo
```

### Збірка проекту
```text
npm run build
```

## Еволюція проекту

- **v0.1.0**: Базові функції (add, capitalize) з типами any
- **v0.2.0**: Додано строгу типізацію для утиліт роботи з числами та рядками
- **v0.3.0**: Додано formatNumber з підтримкою опцій форматування
- **v0.4.0**: Додано User інтерфейс та універсальну функцію groupBy
- **v0.5.0**: Додано Logger клас та конфігурацію через Zod з .env
- **v1.0.0**: Стабілізація публічного API, забороно any, додано exports в package.json
- **v2.0.0**: Змінено сигнатуру функції add для прийняття масиву чисел

## Приклади використання

### Функція add
```typescript
import { add } from 'ts-utils';

console.log(add([2, 3, 4])); // 9
console.log(add([1.5, 2.5, 3])); // 7
```
### Функція capitalize
```typescript
import { capitalize } from 'ts-utils';

console.log(capitalize('hello')); // "Hello"
console.log(capitalize('typescript')); // "Typescript"
```
### Функція formatNumber
```typescript
import { formatNumber } from 'ts-utils';

console.log(formatNumber(123.456, { precision: 2 })); // "123.46"
console.log(formatNumber(123.456, { precision: 0 })); // "123"
```
### Функція groupBy
```typescript
import { groupBy } from 'ts-utils';

const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 25 }
];

const groupedByAge = groupBy(users, user => user.age.toString());
```
### Клас Logger
```typescript
import { Logger } from 'ts-utils';

const logger = new Logger('debug');

logger.info('Application started'); // [INFO] Application started
logger.debug('Extra debug info'); // [DEBUG] Extra debug info
```
## Конфігурація через .env
Створіть файл .env у корені проекту з наступними змінними:

```text
APP_PRECISION=2
LOG_LEVEL=info
```
### Доступні значення:

- APP_PRECISION: число від 0 до 10 (за замовчуванням: 2)

- LOG_LEVEL: 'silent' | 'info' | 'debug' (за замовчуванням: 'info')

## Релізи
- v0.1.0 - Базові утиліти з типами any

- v0.2.0 - Строга типізація

- v0.3.0 - Форматування чисел

- v0.4.0 - Групування масивів

- v0.5.0 - Система логування та конфігурація

- v1.0.0 - Стабільне публічне API

- v2.0.0 - Оновлена сигнатура функції add
