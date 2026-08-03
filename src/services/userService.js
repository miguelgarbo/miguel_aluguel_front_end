import axiosClient from "./http_client";
import UserDTO from "../DTOs/userDTO";




export async function getUsers() {
  const response = await axiosClient.get("/usuarios");
  return response.data;
}

// login fake por enquanto
export async function login(email, senha) {
  const users = await getUsers();
  const user = users.find(
    (u) => u.email === email && u.senhaHash === senha
  );

  console.log("User found:", user);

  return user || null;
}

export async function getUserById(id) {
  const response = await axiosClient.get(`/usuarios/${id}`);
  return response.data;
}

export async function createUser(userData) {
  const response = await axiosClient.post("/usuarios", {
    ...UserDTO,
    ...userData,
  });

  return response.data;
}

export async function updateUser(id, userData) {
  const response = await axiosClient.put(`/usuarios/${id}`, {
    ...UserDTO,
    ...userData,
  });

  return response.data;
}

export async function deleteUser(id) {
  const response = await axiosClient.delete(`/usuarios/${id}`);
  return response.data;
}