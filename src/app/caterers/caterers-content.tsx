"use client";

import {  useMemo, useState } from "react";

import { CatererFilters } from "@/components/caterers/caterer-filters";
import { CatererGrid } from "@/components/caterers/caterer-grid";
import { useCaterers } from "@/hooks/use-caterers";
import { useDebounce } from "@/hooks/use-debounce";

const MAX_PRICE_LIMIT = 2000;

export function CaterersContent() {
  const [search, setSearch] = useState("");

  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT);

  const debouncedSearch = useDebounce(search?.trim());

  const debouncedMaxPrice = useDebounce(maxPrice);

  const filters = useMemo(
    () => ({
      search: debouncedSearch.trim() || undefined,
      maxPrice:
        debouncedMaxPrice < MAX_PRICE_LIMIT ? debouncedMaxPrice : undefined,
    }),
    [debouncedSearch, debouncedMaxPrice],
  );

  const { caterers, isLoading, error } = useCaterers(filters);

  return (
    <div className="space-y-6">
      <CatererFilters
        search={search}
        onSearchChange={setSearch}
        maxPrice={maxPrice}
        priceLimit={MAX_PRICE_LIMIT}
        onMaxPriceChange={setMaxPrice}
      />

      <CatererGrid caterers={caterers} isLoading={isLoading} error={error} />
    </div>
  );
}
