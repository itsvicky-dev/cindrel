import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export const API_URL = import.meta.env.VITE_API_URL ?? '/api'
export const INR_RATE = 83.5
