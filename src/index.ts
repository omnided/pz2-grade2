import * as dotenv from 'dotenv';
dotenv.config();

export function add(a: any, b: any) {
  return a + b;
}

export function capitalize(s: any) {
  return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}
