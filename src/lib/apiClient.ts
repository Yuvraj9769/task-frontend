import axios from "axios";
import type { ApiErrorResponse } from "@/types/caterer";

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL  ?? "http://localhost:5000/api/v1";

  if (!baseURL) {
    throw new Error(
      "API base URL is not defined. Please set NEXT_PUBLIC_API_BASE_URL in your environment variables.",
    );
  }

export const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {

    const data = error.response?.data as ApiErrorResponse | undefined;

    const message =
      data?.message ?? error.message ?? "Something went wrong. Please try again later.";

    return Promise.reject(new Error(message));
  },
);
