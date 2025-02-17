import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function conditionCheck<T>(condition: boolean, trueResult: T, falseResult: T): T {
  return condition ? trueResult : falseResult;
}

export function margeString(values: string[]) {
  return values.join(' ');
}
