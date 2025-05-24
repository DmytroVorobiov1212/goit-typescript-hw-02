// import axios from "axios";

// const ACCESS_KEY = "zXTgwtjGMivEsHKpLixlp7RMFLc0Lgjh0K_ny42XSg0";

// export const fetchImages = async (query, page) => {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {
//         params: {
//             query,
//             page,
//             per_page: 20,
//             client_id: ACCESS_KEY,
//         },
//     });
//     return response.data;
// };


import axios from "axios";

// Ключ API (тримай у .env, не в коді!)
const ACCESS_KEY = "zXTgwtjGMivEsHKpLixlp7RMFLc0Lgjh0K_ny42XSg0";

// Тип для одного зображення
export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  [key: string]: any; // можна конкретизувати далі
}

// Тип для відповіді від API
export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

// Типізація аргументів і повернення
export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        page,
        per_page: 20,
        client_id: ACCESS_KEY,
      },
    }
  );
  return response.data;
};
