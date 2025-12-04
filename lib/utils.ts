import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency);
};

export const formatDate = (date: string) => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

export const capitalizeString = (text: string) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

export const formatBookingDate = (date: string) => {
  return new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    timeStyle: 'short',
  });
};
