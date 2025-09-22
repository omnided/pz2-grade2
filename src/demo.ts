import { add, capitalize, formatNumber, Logger, type LogLevel } from './index.js';
import { config } from './config';

// ПОМИЛКА ЛІНТИНГУ навмисно: подвійні лапки

console.log('sum(2.0 ok):', add([2, 3, 4]));
console.log('capitalize(typed):', capitalize('hello'));
console.log('format(bad):', formatNumber(123.456, { precision: 2 }));

const logger = new Logger(config.LOG_LEVEL as LogLevel); // значення з .env пройшло валідацію zod

logger.info('Application started');
logger.debug('Extra debug info');
