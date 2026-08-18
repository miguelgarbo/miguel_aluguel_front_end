import axiosClient from "./http_client";
import RentalDTO from "../DTOs/rentalDTO";

export async function createRental(rentalData) {
  const response = await axiosClient.post("/alugueis", {
    ...RentalDTO,
    ...rentalData,
  });

  return response.data;
}

export async function getRentalsByUser(userId) {
    const response = await axiosClient.get(`/alugueis/usuario/${userId}`);
    return response.data;
}