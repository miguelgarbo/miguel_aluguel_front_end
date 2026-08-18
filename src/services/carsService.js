import axiosClient from "./http_client";
import CarDTO from "../DTOs/carDTO";

export async function getCars() {
  const response = await axiosClient.get("/carros");
  return response.data;
}

export async function getCarById(id) {
  const response = await axiosClient.get(`/carros/${id}`);
  return response.data;
}

export async function createCar(carData) {
  const response = await axiosClient.post("/carros", {
    ...CarDTO,
    ...carData,
  });

  return response.data;
}

export async function updateCar(id, carData) {
  const response = await axiosClient.put(`/carros/${id}`, {
    ...CarDTO,
    ...carData,
  });

  return response.data;
}

export async function deleteCar(id) {
  const response = await axiosClient.delete(`/carros/${id}`);
  return response.data;
}