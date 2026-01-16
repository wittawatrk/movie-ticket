'use server';

import { Env } from '@/configs/env';
import { customFetch } from './fetch';

export async function getConserts() {
  const url = `${Env.API_URL}/concerts`;
  const token = ` Bearer ${localStorage.getItem('token')}`
  const response = await customFetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json', Authorization: token },

  });
  return await response.json();
}
