import { apiClient } from "./apiClient";
import type { ApiResponse, Caterer } from "@/types/caterer";

export interface CatererFilters {
  search?: string;
  maxPrice?: number;
}

export async function getCaterers(
  filters: CatererFilters = {},
): Promise<Caterer[]> {
  try {

    const params: Record<string, string | number> = {};
    
    if (filters?.search?.trim()) params.search = filters.search;
    
    if (filters.maxPrice !== undefined) params.maxPrice = filters.maxPrice;

    const { data } = await apiClient.get<ApiResponse<Caterer[]>>("/caterers", {
      params,
    });

    return data.data;
  } catch (error) {
    console.error("Error fetching caterers:", error);
    throw new Error("Something went wrong while fetching caterers. Please try again later.");
  }
}

export async function getCatererById(id: string): Promise<Caterer> {
  try {

    if (!id?.trim()) {
      throw new Error("Caterer ID is required.");
    }

    const { data } = await apiClient.get<ApiResponse<Caterer>>(`/caterers/${id}`);

    return data.data;
  } catch (error) {
    console.error("Error fetching caterer by ID:", error);
    throw new Error("Something went wrong while fetching the caterer. Please try again later.");
  }
}
