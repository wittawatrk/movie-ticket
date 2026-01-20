import { isTokenExpired, logout } from './login.service';

export function customFetch(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, {
    ...{
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    ...init,
  })
    .then((response) => response)
    .catch((error) => {
      console.error('Error:', init?.method ?? 'GET', input, error);
      throw error;
    });
}

export const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export function getAuthHeaders(): Record<string, string> {
  const token = localStorage.getItem('token');

  if (!token) return {};

  if (isTokenExpired(token)) {
    console.log('Token expired');
    logout();
    throw new Error('Token expired');
  }

  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}
