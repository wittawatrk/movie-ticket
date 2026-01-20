'use client';

import { Env } from '@/configs/env';
import { customFetch, getAuthHeaders } from './fetch';

async function handleResponse(res: Response) {
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.message || res.statusText || 'Request failed');
  }
  return res.json();
}

export async function getConsertsUser() {
  const url = `${Env.API_URL}/concerts/user`;
  const headers = getAuthHeaders();

  const response = await customFetch(url, {
    method: 'GET',
    headers: { ...headers },
  });

  return handleResponse(response);
}

export async function reserve(conId: string) {
  const url = `${Env.API_URL}/reservations`;
  const headers = getAuthHeaders();

  const response = await customFetch(url, {
    method: 'POST',
    headers: { ...headers },
    body: JSON.stringify({ concertId: conId }),
  });

  return handleResponse(response);
}

export async function cancel(concertId:string) {
  const url = `${Env.API_URL}/reservations/${concertId}`;
  const headers = getAuthHeaders();

  const response = await customFetch(url, {
    method: 'DELETE',
    headers: { ...headers },
  });

  return handleResponse(response);
}

export async function getHistory() {
  const url = `${Env.API_URL}/reservations/me`;
  const headers = getAuthHeaders();

  const response = await customFetch(url, {
    method: 'GET',
    headers: { ...headers },
  });

  return handleResponse(response);
}
