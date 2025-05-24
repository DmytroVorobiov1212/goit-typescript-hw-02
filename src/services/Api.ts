import axios from "axios";

const ACCESS_KEY = "zXTgwtjGMivEsHKpLixlp7RMFLc0Lgjh0K_ny42XSg0";

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  [key: string]: any;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

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
