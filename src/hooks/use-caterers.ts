"use client";

import { useQuery } from "@tanstack/react-query";
import { getCaterers, type CatererFilters } from "@/lib/caterers.api";
import type { Caterer } from "@/types/caterer";

interface UseCaterersResult {
  caterers: Caterer[];
  isLoading: boolean;
  error: string | null;
}

export function useCaterers({
  search,
  maxPrice,
  sortOrder
}: CatererFilters): UseCaterersResult {
  
  const { data, error, isLoading } = useQuery({
    queryKey: ["caterers", search ?? "", maxPrice ?? null, sortOrder ?? ""],
    queryFn: () => getCaterers({ search, maxPrice, sortOrder }),
    placeholderData: (previousData) => previousData,
  });

  return {
    caterers: data ?? [],
    isLoading,
    error: error instanceof Error ? error.message : null
  };
}
