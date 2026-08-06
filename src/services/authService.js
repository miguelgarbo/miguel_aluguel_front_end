import axiosClient from "./http_client";
import AuthDTO from "../DTOs/authDTO";
const TOKEN_KEY = "token";

export async function login(email, senha) {
  const response = await axiosClient.post("/auth/login", {
    email,
    senha,
  });

  const token = response.data;

  localStorage.setItem(TOKEN_KEY, token);

  return token;
}

export async function registrar({nomeCompleto, email, senha}) {
  const response = await axiosClient.post("/auth/registrar", { nomeCompleto, email, senha });

  return response.data;
}


export function getUserAuthenticated() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) return null;

  try {
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch (e) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return !!getToken();
}