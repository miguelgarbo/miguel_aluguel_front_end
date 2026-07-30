import axiosClient from "./http_client";

// GET /cars
export async function getCars() {
  const response = await axiosClient.get("/cars");
  return response.data;
}

// GET /cars/:id
export async function getCarById(id) {
  const response = await axiosClient.get(`/cars/${id}`);
  return response.data;
}

// POST /cars
export async function createCar(carData) {
  const response = await axiosClient.post("/cars", carData);
  return response.data;
}