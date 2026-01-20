'use client';

import { Env } from '@/configs/env';
import { customFetch, getAuthHeaders } from './fetch';

function getToken() {
  const t = localStorage.getItem('token');
  return t ? `Bearer ${t}` : '';
}

export async function getConserts() {
  const url = `${Env.API_URL}/concerts`;

  const response = await customFetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  });

  return response.json();
}

export async function deleteConcert(id: string) {
  const url = `${Env.API_URL}/concerts/${id}`;

  const response = await customFetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: getToken(),
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}

export type CreateConcertPayload = {
  name: string;
  description: string;
  totalSeats: number;
};

export async function createConcert(payload: CreateConcertPayload) {
  const url = `${Env.API_URL}/concerts`;
  const token = localStorage.getItem('token');

  const response = await customFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}

export async function getHistory() {
  const url = `${Env.API_URL}/reservations/admin/all`;
  const headers = getAuthHeaders();

  const response = await customFetch(url, {
    method: 'GET',
    headers: { ...headers },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  return response.json();
}
