'use server';

import { Env } from '@/configs/env';
export function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
}
export async function login(username: string, password: string) {
  const url = `${Env.API_URL}/auth/login`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.status === 401) {
    return { authorized: false };
  }

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const body = await response.json();
  if (!body.access_token) return { authorized: false };

  const user = JSON.parse(
    atob(body.access_token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')),
  );

  localStorage.setItem('token', body.access_token);
  localStorage.setItem('user', JSON.stringify(user));

  return { authorized: true, user };
}
