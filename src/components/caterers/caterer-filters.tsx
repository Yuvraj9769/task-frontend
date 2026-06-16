"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { formatPrice } from "@/lib/format";

interface CatererFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  maxPrice: number;
  priceLimit: number;
  onMaxPriceChange: (value: number) => void;
}

export function CatererFilters({
  search,
  onSearchChange,
  maxPrice,
  priceLimit,
  onMaxPriceChange,
}: CatererFiltersProps) {
  return (
    <div className="glass-panel relative z-10 grid gap-6 rounded-2xl p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
      <div className="flex flex-col space-y-2">
        <label htmlFor="search" className="text-sm font-semibold text-muted-foreground ml-1">
          Search Caterers
        </label>
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary to-blue-500 opacity-0 blur transition duration-500" />
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="E.g. The Gourmet Kitchen..."
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              className="h-11 rounded-xl bg-background/50 pl-9 shadow-sm transition-all focus-within:border-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="hidden sm:block h-12 w-px bg-border/50 self-end mb-2" />

      <div className="space-y-3 sm:pl-4">
        <div className="flex items-center justify-between ml-1">
          <span className="text-sm font-semibold text-muted-foreground">Max price per plate</span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            {formatPrice(maxPrice)}
          </span>
        </div>
        <div className="relative pt-2 pb-1 px-1">
          <Slider
            aria-label="Max price per plate"
            min={0}
            max={priceLimit}
            step={50}
            value={[maxPrice]}
            onValueChange={(value) =>
              onMaxPriceChange(Array.isArray(value) ? value[0] : value)
            }
            className="[&_[role=slider]]:h-5 cursor-pointer [&_[role=slider]]:w-5 [&_[role=slider]]:border-primary [&_[role=slider]]:shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
