"use server";

import { Env } from "@/configs/env";

export async function login(username: string, password: string) {
  const url = `${Env.API_URL}/v1/auth/login`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
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
    atob(body.access_token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
  );

  localStorage.setItem("token", body.access_token);
  localStorage.setItem("user", JSON.stringify(user));

  return { authorized: true, user };
}
