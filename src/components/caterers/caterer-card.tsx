import { MapPin, Star } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/format";
import type { Caterer } from "@/types/caterer";

export function CatererCard({ caterer }: { caterer: Caterer }) {
  return (
    <Card className="glass-panel group relative h-full overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardHeader className="relative pb-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-xl tracking-tight font-bold transition-colors group-hover:text-primary line-clamp-1">
            {caterer?.name}
          </CardTitle>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
            <Star className="size-3.5 fill-current" />
            {caterer?.rating?.toFixed(1)}
          </div>
        </div>
        <p className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground mt-1">
          <MapPin className="size-4 text-primary/70" />
          {caterer?.location}
        </p>
      </CardHeader>

      <CardContent className="relative flex flex-wrap gap-2 pb-4">
        {caterer?.cuisines.map((cuisine) => (
          <Badge key={cuisine} variant="secondary" className="bg-secondary/50 hover:bg-secondary border-transparent">
            {cuisine}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="relative mt-auto border-t border-border/50 pt-4 justify-between bg-muted/20">
        <span className="text-sm font-medium text-muted-foreground">Price per plate</span>
        <span className="text-lg font-bold text-foreground">
          {formatPrice(caterer?.pricePerPlate)}
        </span>
      </CardFooter>
    </Card>
  );
}
