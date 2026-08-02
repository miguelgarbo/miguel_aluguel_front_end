import axiosClient from "./http_client";

// export async function getCars() {
//   const response = await axiosClient.get("/cars");
//   return response.data;
// }


const mockCars = [
  {
    id: 1,
    name: "Dolphin",
    brand: "BYD",
    weeklyPrice: 450,
    category: "hatch",
    transmission: "automático",
    fuelType: "eletrico",
    imageUrl:
      "https://s2-autoesporte.glbimg.com/yJIPzAB-r8rCmYdi43CP68Qonhw=/0x0:1920x1280/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2026/x/A/nPFjovSmebCTi7aFvWtw/byd-dolphin-gs-frente.jpg",
  },
  {
    id: 2,
    name: "Onix",
    brand: "Chevrolet",
    weeklyPrice: 320,
    category: "sedan",
    transmission: "manual",
    fuelType: "flex",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2021_Chevrolet_Onix_Plus_1.2_LT.jpg",
  },
  {
    id: 3,
    name: "Corolla",
    brand: "Toyota",
    weeklyPrice: 600,
    category: "sedan",
    transmission: "automático",
    fuelType: "flex",
    imageUrl: "https://www.autoo.com.br/fotos/2024/8/1280_960/toyota_corolla_2025_1_03082024_79723_1280_960.jpg",
  },
  {
    id: 4,
    name: "Ora 03",
    brand: "GWM",
    weeklyPrice: 550,
    category: "hatch",
    transmission: "automático",
    fuelType: "elétrico",
    imageUrl:
      "https://www.gwmmotors.com.br/content/dam/gwm/pages/br/pt/media-center/news/2023/gwm-lanca-o-modelo-eletrico-ora-03-em-duas-versoes/banner-gwm-lanca-o-modelo-eletrico-ora-03-em-duas-versoes.png",
  },
  {
    id: 5,
    name: "Song Plus",
    brand: "BYD",
    weeklyPrice: 380,
    category: "suv",
    transmission: "automático",
    fuelType: "elétrico",
    imageUrl:
      "https://revistacarro.com.br/wp-content/uploads/2024/10/BYD2.jpeg",
  },
];

export async function getCars() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockCars;
}

export async function getCarById(id) {
  const response = await axiosClient.get(`/cars/${id}`);
  return response.data;
}

export async function createCar(carData) {
  const response = await axiosClient.post("/cars", carData);
  return response.data;
}