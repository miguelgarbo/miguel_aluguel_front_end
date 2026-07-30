import axiosClient from "./http_client";

export async function getCars() {
  const response = await axiosClient.get("/cars");
  return response.data;
}

export async function getCarById(id) {
  const response = await axiosClient.get(`/cars/${id}`);
  return response.data;
}

export async function createCar(carData) {
  const response = await axiosClient.post("/cars", carData);
  return response.data;
}