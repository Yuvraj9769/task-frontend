import type { Metadata } from "next";
import { CaterersHeader } from "./caterers-header";
import { CaterersContent } from "./caterers-content";

export const metadata: Metadata = {
  title: "Find Caterers | Premium Catering Search",
  description: "Discover hand-picked culinary experts for your next unforgettable event. Filter by price, search by name, and explore top-rated professional caterers.",
  keywords: ["caterers", "catering", "event catering", "food service", "caterer search"],
  openGraph: {
    title: "Find Caterers | Premium Catering Search",
    description: "Discover hand-picked culinary experts for your next unforgettable event.",
    type: "website",
    url: "/caterers",
  },
};

export default function CaterersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10">
      <CaterersHeader />
      <CaterersContent />
    </main>
  );
}
