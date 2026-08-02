import axiosClient from "./http_client";

export async function getCars() {
  const response = await axiosClient.get("/carros");

  console.log("response.data", response.data)
  return response.data;
}


export async function getCarById(id) {
  const response = await axiosClient.get(`/carros/${id}`);
  return response.data;
}

export async function createCar(carData) {
  const response = await axiosClient.post("/carros", carData);
  return response.data;
}