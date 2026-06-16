import { CatererCard } from "./caterer-card";
import { CatererCardSkeleton } from "./caterer-card-skeleton";
import type { Caterer } from "@/types/caterer";

interface CatererGridProps {
  caterers: Caterer[];
  isLoading: boolean;
  error: string | null;
}

const SKELETON_COUNT = 6;

const gridClasses = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

export function CatererGrid({ caterers, isLoading, error }: CatererGridProps) {
  if (isLoading) {
    return (
      <div className={gridClasses}>
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <CatererCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center">
        <p className="font-medium">Couldn&apos;t load caterers</p>
        <p className="mt-1 text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (caterers.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center">
        <p className="font-medium">No caterers found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try a different name or raise the price limit.
        </p>
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {caterers.map((caterer) => (
        <CatererCard key={caterer.id} caterer={caterer} />
      ))}
    </div>
  );
}
